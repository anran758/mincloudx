const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const targetFilePath = path.resolve(__dirname, '../_scheme.json');
const outputPath = path.resolve(__dirname, '../types/scheme');

const TBL_NAME_MAPPING = {
  _userprofile: 'UserProfile',
  _richtextcontent: 'RichTextContent',
};

const FIELD_TYPE_MAP = {
  integer: 'Int',
};

function omitBaseFields(field) {
  return !['id', 'created_at', 'updated_at', 'created_by'].includes(field.name);
}

/**
 * 根据数据表信息生成 ts 文件
 */
async function generateTsEntryFile(schemas) {
  if (!schemas?.length) return;

  const declaration = schemas
    .map((schema) => `/// <reference path="./${schema.name}.d.ts" />`)
    .join('\n');

  return writeFile(path.resolve(outputPath, `index.d.ts`), declaration);
}

/**
 * 生成入口文件
 */
function generateSchemeTsFile(schema) {
  const declaration = generateDeclaration(schema);
  return writeFile(
    path.resolve(outputPath, `${schema.name}.d.ts`),
    declaration
  );
}

function generateFieldType(field) {
  let typeStr = '';

  const fieldChoices = getFieldChoices(field);

  if (field.name.endsWith('_at')) {
    typeStr = 'EpochSeconds';
  } else if (field.type === 'array') {
    typeStr = `${FIELD_TYPE_MAP[field.items.type] || field.items.type}[]`;
  } else if (field.type === 'reference') {
    typeStr = `SchemaPointer<${getInterfaceName(field.name)}>`;
  } else if (field.type === 'string' && fieldChoices) {
    typeStr = ['string', ...fieldChoices.map((val) => `'${val}'`)].join(' | ');
  } else {
    typeStr = FIELD_TYPE_MAP[field.type] || field.type;
  }

  if (!field.constraints.required && field.default === undefined) {
    typeStr = `${typeStr} | Default<undefined>`;
  } else if (field.default !== undefined) {
    typeStr = `${typeStr} | Default<${JSON.stringify(field.default)}>`;
  }

  return typeStr;
}

function convertFieldDeclaration(field) {
  return [
    `  /**`,
    `   * ${field.description}`,
    `   **/`,
    `  ${field.name}: ${generateFieldType(field)}`,
  ].join('\n');
}

function getFieldChoices(field) {
  const rule =
    field.constraints &&
    field.constraints.rules &&
    field.constraints.rules.length &&
    field.constraints.rules.find((rule) => rule.type === 'choices');

  return rule && rule.value;
}

/**
 * 根据 scheme 信息生成对应的类型代码
 * @returns {Number}
 */
function generateDeclaration(schema) {
  if (!schema) return '';
  const { name = '' } = schema;
  const schemaName = getInterfaceName(name);
  const content = schema.schema.fields
    .filter(omitBaseFields)
    .map(convertFieldDeclaration)
    .join('\n');

  return [
    `// [tips]: 该文件由 convert-types 自动生成，请勿直接修改文件`,
    `/// <reference path="../schema.d.ts" />`,
    ``,
    `/**`,
    ` * ${name} 表`,
    ` * @description ${schema.options?.description || ''}`,
    ` */`,
    `interface ${schemaName} extends IBaseSchemaObject {`,
    `${content}`,
    `}`,
  ].join('\n');
}

function getInterfaceName(name) {
  // 添加类前缀
  return `I${TBL_NAME_MAPPING[name] || pascalCase(name)}Schema`;
}

function pascalCase(str) {
  return str.replace(/(^|_)(\w)/g, (match, head, letter) =>
    letter.toUpperCase()
  );
}

async function main() {
  try {
    const data = await readFile(targetFilePath);
    const schemaData = JSON.parse(data);

    // 知晓云数据列表的格式
    const schemas = schemaData.objects;
    if (Array.isArray(schemas)) {
      console.log('准备生成文件');

      const taskList = schemas.map((scheme) => generateSchemeTsFile(scheme));
      taskList.push(generateTsEntryFile(schemas));

      await Promise.all(taskList);
      console.log('文件生成完毕！');
    }
  } catch (err) {
    console.error('读取文件失败:', err);
  }
}

main();
