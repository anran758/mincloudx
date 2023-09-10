import { getBaaS } from './baas';

// export type RemoveFirst<T extends any[]> = T extends [any, ...infer Rest]
//   ? Rest
//   : never;

// export type OmitFirstParamFunction<F extends (...args: any) => any> = (
//   ...args: RemoveFirst<Parameters<F>>
// ) => ReturnType<F>;

interface BasicOperationOptions {
  plain?: boolean;
}

type RecordId = string | number;

export interface Operation {
  readonly table: any;
  create: <T = Record<any, any>>(
    data: T,
    options?: BasicOperationOptions,
  ) => Promise<Record<any, any>>;
  update: <T = Record<any, any>>(
    id: RecordId,
    data: T,
    options?: BasicOperationOptions,
  ) => Promise<Record<any, any>>;
  get: (
    id: RecordId,
    options?: BasicOperationOptions,
  ) => Promise<Record<any, any>>;
  delete: (id: RecordId) => Promise<any>;
}

export function createTableOperation(tableName: string) {
  const BaaS = getBaaS();
  const tableOperation: Operation = {
    get table() {
      return new BaaS.TableObject(tableName);
    },

    async create(data, { plain } = {}) {
      const record = tableOperation.table.create();

      return record
        .set(data)
        .save()
        .then(res => (plain ? res.data : res));
    },

    async update(id, data) {
      console.log(`Updating record ${id} in ${tableName} with data:`, data);

      return Promise.resolve(data);
    },

    async get(id) {
      console.log(`Creating record in ${tableName} with data`, id);

      return {};
    },

    async delete(id) {
      console.log(`Deleting record ${id} from ${tableName}`);

      return {};
    },
  };

  return tableOperation;
}
