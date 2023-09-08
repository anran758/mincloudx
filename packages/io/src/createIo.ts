import { createTableOperation, Operation } from './operations';

export function createIo<T extends string>(options: { tables?: T[] } = {}) {
  const BaaS = global.BaaS;
  if (!BaaS) {
    throw new Error('BaaS is not initialized.');
  }

  const io = {
    get query() {
      return new BaaS.Query();
    },

    get user() {
      return new BaaS.User();
    },

    get file() {
      return new BaaS.File();
    },

    table(tableName: string) {
      return new BaaS.TableObject(tableName);
    },
  };

  const dynamicIo: { [K in T]?: Operation } = {};
  options.tables?.forEach(tableName => {
    dynamicIo[tableName] = createTableOperation(tableName);
  });

  return Object.assign(io, dynamicIo);
}
