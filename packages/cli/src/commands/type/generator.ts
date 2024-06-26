import { readFile } from 'fs/promises';
import path from 'path';

import {
  FIELD_TYPE_MAP,
  TABLE_NAME_MAPPING,
  packageInfo,
} from '@/config/constant';
import {
  getBaseType,
  pascalCase,
  parseCollectionName,
  writeFile,
} from '@/utils';

import type { SchemaRootObject, SchemeObject, SchemaField } from './schema';

/**
 * Read the content of TypeScript template file in assist directory
 */
export async function getBaseContent() {
  const filePath = path.join(__dirname, './assist/type.template.ts');
  const data = await readFile(filePath, 'utf8');

  return data;
}

/**
 * get interface name
 * @description special internal data tables need to be read from mapping first
 */
export function getInterfaceName(name: string) {
  return TABLE_NAME_MAPPING[name] || pascalCase(name);
}

export function getFieldChoices(field: SchemaField): string[] {
  const rule = field.constraints?.rules?.find?.(
    rule => rule.type === 'choices',
  );

  return rule?.value || [];
}

export function getFieldType(field: SchemaField): string {
  // 初始化类型字符串
  const defaultType = getFieldDefaultType(field);
  let fieldType = defaultType ? `${defaultType} | ` : '';

  // 处理时间戳字段
  if (field.name.endsWith('_at')) {
    fieldType += 'EpochSeconds';
    return fieldType;
  }

  // 根据字段类型处理
  switch (field.type) {
    case 'array':
      fieldType += getArrayFieldType(field);
      break;
    case 'reference':
      fieldType += getReferenceFieldType(field);
      break;
    case 'string':
      fieldType += getStringFieldType(field);
      break;
    default:
      fieldType += FIELD_TYPE_MAP[field.type] || field.type;
  }

  // 添加默认值修饰符
  return fieldType;
}

/**
 * 处理数组类型
 * @param {SchemaField} field 字段
 * @return {string}
 */
function getArrayFieldType(field: SchemaField): string {
  const itemType = field.items?.type || '';
  return `${FIELD_TYPE_MAP[itemType] || itemType}[]`;
}

/**
 * 处理引用类型
 * @param {SchemaField} field 字段
 * @return {string}
 */
function getReferenceFieldType(field: SchemaField): string {
  const { schemaName } = parseCollectionName(field.collection_name);
  const name = getInterfaceName(schemaName);

  return `SchemaPointer<${name}>`;
}

/**
 * 处理字符串类型，考虑字段选择
 */
function getStringFieldType(field: SchemaField): string {
  const fieldChoices = getFieldChoices(field).map(val => `'${val}'`);
  fieldChoices.unshift('string');

  return fieldChoices.join(' | ');
}

/**
 * get field default type
 */
function getFieldDefaultType(field: SchemaField): string {
  if (field.default) {
    const defaultValue = JSON.stringify(field.default).replace(/"/g, `'`);
    const formattedDefault =
      // eslint: use an empty object instead of `{}`
      defaultValue === '{}' ? 'Record<string, any>' : defaultValue;
    return `Default<${formattedDefault}>`;
  }

  if (field?.constraints?.required) return '';

  return `Default`;
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
    .filter(field => {
      return !['id', 'created_at', 'updated_at', 'created_by'].includes(
        field.name,
      );
    })
    .map((field: SchemaField) => {
      return [
        `  /**`,
        `   * ${field.description}`,
        `   **/`,
        `  ${field.name}: ${getFieldType(field)};`,
      ].join('\n');
    })
    .join('\n');

  const tableDescription = schema.options?.description;
  return [
    ``,
    `/**`,
    ` * 数据表: ${name}`,
    ` * @description${tableDescription ? ` ${tableDescription}` : ''}`,
    ` */`,
    `export interface ${schemaName} extends BaseTable {`,
    `${content}`,
    `}`,
  ].join('\n');
}

/**
 * 写入 schema 至 .d.ts 类型文件中
 */
export async function writeSchemaFile(
  list: SchemeObject[],
  { outputDir, outputFile }: { outputDir: string; outputFile: string },
) {
  // 转为文本
  const schemasText = list
    .sort((a, b) => {
      const aIsBuiltInSchema = a.name.startsWith('_');
      const bIsBuiltInSchema = b.name.startsWith('_');

      if (aIsBuiltInSchema && !bIsBuiltInSchema) {
        return -1;
      } else if (!aIsBuiltInSchema && bIsBuiltInSchema) {
        return 1;
      } else {
        return 0;
      }
    })
    .map(schema => generateDeclaration(schema))
    .join('\n');

  // 基础类型文件
  const baseTypeStr = await getBaseContent();
  const content = [
    `/*`,
    ` * [tips]: This file is automatically generated by ${packageInfo.name}, please do not modify the file directly.`,
    ` */`,
    baseTypeStr + schemasText,
  ].join('\n');

  return writeFile({
    fileName: `${outputFile}.d.ts`,
    dirPath: outputDir,
    content: `${content}\n`,
  });
}

export async function generatorSchemaFile({
  input,
  outputDir,
  outputFile = `schema`,
}: {
  input: string;
  outputDir: string;
  outputFile?: string;
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

  return writeSchemaFile(schemas, { outputDir, outputFile });
}
