export interface RecordData {
  [key: string]: any;
}

export function createRecord(tableName: string, data: RecordData): void {
  console.log(`Creating record in ${tableName} with data`, data);
}

export function getRecord(
  tableName: string,
  { id }: { id?: string } = {},
): void {
  console.log(`Creating record in ${tableName} with data`, id);
}

export function updateRecord(
  tableName: string,
  recordID: string,
  data: RecordData,
): void {
  console.log(`Updating record ${recordID} in ${tableName} with data`, data);
  // 实际调用 BaaS API 更新记录的逻辑
}

export function deleteRecord(tableName: string, recordID: string): void {
  console.log(`Deleting record ${recordID} from ${tableName}`);
  // 实际调用 BaaS API 删除记录的逻辑
}

export type RemoveFirst<T extends any[]> = T extends [any, ...infer Rest]
  ? Rest
  : never;

export type OmitFirstParamFunction<F extends (...args: any) => any> = (
  ...args: RemoveFirst<Parameters<F>>
) => ReturnType<F>;

export interface Operation {
  create: OmitFirstParamFunction<typeof createRecord>;
  update: OmitFirstParamFunction<typeof updateRecord>;
  get: OmitFirstParamFunction<typeof getRecord>;
  delete: OmitFirstParamFunction<typeof deleteRecord>;
}

export function createTableOperation(tableName: string): Operation {
  return {
    create(...rest) {
      return createRecord(tableName, ...rest);
    },
    get(...rest) {
      return getRecord(tableName, ...rest);
    },
    update(...rest) {
      return updateRecord(tableName, ...rest);
    },
    delete(...rest) {
      return deleteRecord(tableName, ...rest);
    },
  };
}
