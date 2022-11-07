import path from 'path';
import { readFile } from 'fs/promises';

import { FIELD_TYPE_MAP, TABLE_NAME_MAPPING } from '../../config';
import {
  getBaseType,
  pascalCase,
  parseCollectionName,
  writeFile,
} from '../../utils';
import projectPackage from "../../../package.json";
import type { SchemaRootObject, SchemeObject, SchemaField } from '../schema';

/**
 * 公共的类型文件
 */
const baseFilePath = path.resolve(__dirname, './base.d.ts');

/**
 * 获取接口名称
 */
export function getInterfaceName(name: string) {
  return TABLE_NAME_MAPPING[name] || pascalCase(name);
}

export function getFieldChoices(field: SchemaField): string[] {
  const rule =
    field.constraints &&
    field.constraints.rules &&
    field.constraints.rules.length &&
    field.constraints.rules.find((rule) => rule.type === 'choices');

  return rule?.value || [];
}

export function generateFieldType(field: SchemaField) {
  let typeStr = '';

  const fieldChoices = getFieldChoices(field);

  if (field.name.endsWith('_at')) {
    typeStr = 'EpochSeconds';
  } else if (field.type === 'array') {
    const type = field.items?.type || '';
    typeStr = `${FIELD_TYPE_MAP[type] || type}[]`;
  } else if (field.type === 'reference') {
    const { schemaName } = parseCollectionName(field.collection_name);
    typeStr = `SchemaPointer<${getInterfaceName(schemaName)}>`;
  } else if (field.type === 'string' && fieldChoices) {
    typeStr = ['string', ...fieldChoices.map((val) => `'${val}'`)].join(' | ');
  } else {
    typeStr = FIELD_TYPE_MAP[field.type] || field.type;
  }

  if (!field?.constraints?.required && field?.default === undefined) {
    typeStr = `${typeStr} | Default<undefined>`;
  } else if (field.default !== undefined) {
    typeStr = `${typeStr} | Default<${JSON.stringify(field.default)}>`;
  }

  return typeStr;
}

/**
 * 根据 schema 信息生成对应的类型代码
 * @returns {Number}
 */
export function generateDeclaration(schema: SchemeObject) {
  if (!schema) return '';

  const { name = '' } = schema;
  const schemaName = getInterfaceName(name);
  const content = schema.schema.fields
    .filter((field) => {
      return !['id', 'created_at', 'updated_at', 'created_by'].includes(
        field.name
      );
    })
    .map((field: SchemaField) => {
      return [
        `  /**`,
        `   * ${field.description}`,
        `   **/`,
        `  ${field.name}: ${generateFieldType(field)}`,
      ].join('\n');
    })
    .join('\n');

  return [
    ``,
    `/**`,
    ` * ${name} 表`,
    ` * @description ${schema.options?.description || ''}`,
    ` */`,
    `interface ${schemaName} extends BaseSchemaObject {`,
    `${content}`,
    `}`,
  ].join('\n');
}

export async function generatorSchemaTs({
  input,
  output,
}: {
  input: string;
  output: string;
}) {
  let schemaData: SchemaRootObject | null = null;

  // 解析 JSON
  try {
    const data = await readFile(input);
    schemaData = JSON.parse(data.toString());

    // 检查格式是否正确
    if (getBaseType(schemaData) !== 'object') {
      throw new Error('schema 文件 JSON 格式有误');
    }
  } catch (error) {
    const err = '读取文件失败！请确认 JSON 格式是否正确';
    console.error(err, error);
    throw new Error(err);
  }

  const schemas = schemaData!.objects;
  if (!schemas?.length) {
    console.log('schemas 文件中没有找到 objects 数组或数组为空，结束生成');
    return;
  }

  // 转为文本
  const schemasText = schemas
    .map((schema) => generateDeclaration(schema))
    .join('\n');

  // 基础类型文件
  const baseTypeFile = await readFile(baseFilePath);
  const baseTypeStr = baseTypeFile.toString();

  return writeFile({
    fileName: `index.d.ts`,
    dirPath: output,
    content:
      `// [tips]: 该文件由 ${projectPackage.name} 自动生成，请勿直接修改文件。\n` +
      baseTypeStr +
      schemasText,
  });
}
