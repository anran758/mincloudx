import { getBaaS, getBaseIo } from './baas';
import { createTableOperation } from './operations';
import type { Operation } from './type';

export function createIo<T extends string>(options: { tables?: T[] } = {}) {
  const BaaS = getBaaS();
  const io = getBaseIo(BaaS);

  const dynamicIo = {} as { [K in T]: Operation };
  options.tables?.forEach(tableName => {
    dynamicIo[tableName] = createTableOperation(tableName);
  });

  return Object.assign(dynamicIo, io);
}
