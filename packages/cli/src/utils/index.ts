import path from 'path';
import mkdirp from 'mkdirp';
import fs from 'fs/promises';

export * from './path';
export * from './logger';
export * from './cloud-function';

/**
 * 获取类型的字段
 */
export function getBaseType(target: any) {
  const typeStr = Object.prototype.toString.call(target).toLocaleLowerCase();

  return typeStr.slice(8, -1);
}

export function formatBytes(byte) {
  const divisor = 1024;
  const unit = ['Byte', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (Math.floor(byte / divisor) > 1) {
    i++;
    byte = byte / divisor;
  }
  return byte.toFixed(2) + unit[i];
}

export function pascalCase(str: string) {
  return str.replace(/(^|_)(\w)/g, (match, head, letter) =>
    letter.toUpperCase(),
  );
}

/**
 * 解析字段所引用的数据表
 */
export function parseCollectionName(collectionName = '') {
  const [appId, schemaId, ...others] = collectionName.split('_');
  const schemaName = others.join('_');

  return {
    appId,
    schemaId,
    schemaName,
  };
}

export async function writeFile({
  fileName,
  dirPath,
  content,
}: {
  fileName: string;
  dirPath: string;
  content: string;
}) {
  // 确保目录被创建
  await mkdirp(dirPath);

  return fs.writeFile(path.resolve(dirPath, fileName), content);
}
