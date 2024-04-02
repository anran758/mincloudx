import { getBaseIo } from './baas';

import type {
  Operation,
  DeleteOperation,
  UpdateOperation,
  OperatorData,
  QueryOperationOptions,
  MinCloudResponse,
  FindListResponseData,
} from './type';
import { DEFAULT_ENABLE_TRIGGER } from './config';

const io = getBaseIo();
export function createTableOperation(tableName: string): Operation {
  return {
    get table() {
      return io.table(tableName);
    },

    /**
     * Create new a row for the table
     */
    async create(data, { plain = true } = {}) {
      const record = this.table.create();

      return record
        .set(data)
        .save()
        .then(res => (plain ? res.data : res));
    },

    /**
     * Create new a row for the table
     */
    async createMany(
      dataList,
      { plain = true, enableTrigger = DEFAULT_ENABLE_TRIGGER } = {},
    ) {
      return this.table
        .createMany(dataList, { enableTrigger })
        .then(res => (plain ? res.data : res));
    },

    async update(id, options = {}) {
      if (!id) {
        throw new Error('Missing required id parameter');
      }

      return updateRecord(this.table, {
        ...options,
        id,
      });
    },

    async updateMany(options = {}) {
      return updateRecord(this.table, options);
    },

    async get(id, { expand, select, plain = true } = {}) {
      const { table } = this;
      if (expand) table.expand(expand);
      if (select) table.select(select);

      return table.get(id).then(res => (plain ? res.data : res));
    },

    async find(
      query = io.query,
      {
        expand,
        select,
        offset = 0,
        limit = 20,
        orderBy = '-created_at',
        withCount = false,
        plain = true,
      } = {},
    ) {
      return this.table
        .setQuery(query)
        .offset(offset)
        .limit(limit)
        .orderBy(orderBy)
        .expand(expand)
        .select(select)
        .find({ withCount })
        .then(res => (plain ? res.data.objects : res));
    },

    /**
     * Find the first record that matches `Query`
     */
    async first<
      Data extends object = OperatorData,
      Plain extends boolean = true,
    >(
      query = io.query,
      {
        expand,
        select,
        offset = 0,
        orderBy = '-created_at',
        plain = true,
      }: QueryOperationOptions = {},
    ) {
      const result = await this.find<Data, Plain>(query, {
        expand,
        select,
        offset,
        orderBy,
        plain,
        limit: 1,
      });

      if (plain) return result[0];

      const response = result as MinCloudResponse<FindListResponseData<Data>>;
      return {
        ...result,
        data: response.data.objects[0],
      };
    },

    async delete(id, options = {}) {
      if (!id) {
        return Promise.reject(new Error('Missing required id parameter'));
      }

      return deleteRecord(this.table, {
        id,
        ...options,
      });
    },

    async deleteMany(query, options = {}) {
      if (!query) {
        return Promise.reject(new Error('Missing required query parameter'));
      }

      return deleteRecord(this.table, {
        query,
        ...options,
      });
    },

    async count(query) {
      return this.table.setQuery(query).count();
    },
  };
}

const updateRecord = (table, options: UpdateOperation) => {
  const {
    id,
    query = io.query,
    data,
    unset,
    incrementBy,
    append,
    uAppend,
    remove,
    patchObject,
    offset = 0,
    limit,
    enableTrigger = DEFAULT_ENABLE_TRIGGER,
    withCount = false,
    plain = true,
  } = options || {};

  if (query) {
    table.offset(offset);
    if (limit) table.limit(limit);
  }

  const record = table.getWithoutData(id || query);
  const each = (method, data) =>
    Object.entries(data).forEach(([key, val]) => record[method](key, val));

  if (data) each('set', data);
  if (unset) each('unset', unset);
  if (incrementBy) each('incrementBy', incrementBy);
  if (append) each('append', append);
  if (uAppend) each('uAppend', uAppend);
  if (remove) each('remove', remove);
  if (patchObject) each('patchObject', patchObject);

  return record
    .update({ enableTrigger, withCount })
    .then(res => (plain ? res.data : res));
};

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
    plain = true,
    enableTrigger = DEFAULT_ENABLE_TRIGGER,
    withCount = false,
  }: DeleteOperation = {},
) {
  if (query) {
    table.offset(offset);
    if (limit) table.limit(limit);
  }

  return table
    .delete(id || query, { enableTrigger, withCount })
    .then(res => (plain ? res.data : res));
}
