import { BaaS } from '@mincloudx/types';
import { getBaaS, getBaseIo } from './baas';

type RecordId = string | number;

interface BasicOperationOptions {
  plain?: boolean;
}

interface UpdateOperationOptions extends BasicOperationOptions {
  data?: Record<string | number, any>;
  unset?: Record<string | number, any>;
  incrementBy?: Record<string | number, any>;
  append?: Record<string | number, any>;
  uAppend?: Record<string | number, any>;
  remove?: Record<string | number, any>;
  patchObject?: Record<string | number, any>;
  enableTrigger?: boolean;
  withCount?: boolean;
}

interface QueryOperationOptions extends BasicOperationOptions {
  expand?: string[];
  select?: string[];
}

interface DeleteOperation {
  id?: RecordId;
  query?: BaaS.Query;
  offset?: number;
  limit?: number;
  enableTrigger?: boolean;
  withCount?: boolean;
}

export interface Operation {
  readonly table: any;
  create: <T extends object = Record<any, any>>(
    data: T,
    options?: BasicOperationOptions,
  ) => Promise<Record<any, any>>;
  get: (
    id: RecordId,
    options?: QueryOperationOptions,
  ) => Promise<Record<any, any>>;
  update: <T extends object = Record<any, any>>(
    id: RecordId,
    options: UpdateOperationOptions,
  ) => Promise<T>;
  delete: (
    query: DeleteOperation['id'] | DeleteOperation['query'],
  ) => Promise<any>;
}

const io = getBaseIo();

export function createTableOperation(tableName: string) {
  const BaaS = getBaaS();
  const tableOperation: Operation = {
    get table() {
      return new BaaS.TableObject(tableName);
    },

    /**
     * Create new a row for the table
     */
    async create(data, { plain = true } = {}) {
      const record = tableOperation.table.create();

      return record
        .set(data)
        .save()
        .then(res => (plain ? res.data : res));
    },

    async update(
      id,
      {
        data,
        unset,
        incrementBy,
        append,
        uAppend,
        remove,
        patchObject,
        withCount = false,
        enableTrigger = true,
        plain = true,
      } = {},
    ) {
      if (!id) {
        throw new Error('Missing required id parameter');
      }
      const record = tableOperation.table.getWithoutData(id);
      const mergeOperator = (method, data) =>
        Object.entries(data).forEach(([key, val]) => record[method](key, val));

      if (data) mergeOperator('set', data);
      if (unset) mergeOperator('unset', unset);
      if (incrementBy) mergeOperator('incrementBy', incrementBy);
      if (append) mergeOperator('append', append);
      if (uAppend) mergeOperator('uAppend', uAppend);
      if (remove) mergeOperator('remove', remove);
      if (patchObject) mergeOperator('patchObject', patchObject);

      return record
        .update({ enableTrigger, withCount })
        .then(res => (plain ? res.data : res));
    },

    async get(id, { expand, select, plain = true } = {}) {
      const { table } = tableOperation;
      if (expand) table.expand(expand);
      if (select) table.select(select);

      return table.get(id).then(res => (plain ? res.data : res));
    },

    async delete(query, options: Omit<DeleteOperation, 'id' | 'query'> = {}) {
      if (!query) {
        return Promise.reject(new Error('Missing required id parameter'));
      }
      const opts: DeleteOperation = {
        ...options,
      };
      if (typeof query === 'string' || typeof query === 'number') {
        opts.id = query;
      } else {
        opts.query = query;
      }

      return deleteRecord(tableOperation.table, opts);
    },
  };

  return tableOperation;
}

/**
 * delete data record
 */
function deleteRecord(
  table,
  {
    id,
    query = io.query,
    offset = 0,
    limit,
    enableTrigger = true,
    withCount = false,
  }: DeleteOperation = {},
) {
  if (query) {
    table.offset(offset);
    if (limit) table.limit(limit);
  }

  return table.delete(id || query, { enableTrigger, withCount });
}
