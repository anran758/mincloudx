import { getBaaS, getBaseIo } from './baas';

import { DeleteOperation, Operation } from './type';
import { DEFAULT_ENABLE_TRIGGER } from './config';

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
        enableTrigger = DEFAULT_ENABLE_TRIGGER,
        plain = true,
      } = {},
    ) {
      if (!id) {
        throw new Error('Missing required id parameter');
      }
      const record = this.table.getWithoutData(id);
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
        orderBy = '-created_at',
        withCount = false,
        plain = true,
      } = {},
    ) {
      return this.table
        .setQuery(query)
        .expand(expand)
        .select(select)
        .orderBy(orderBy)
        .find({ withCount })
        .then(res => (plain ? res.data : res));
    },

    async delete(id, options = {}) {
      if (!id) {
        return Promise.reject(new Error('Missing required id parameter'));
      }

      return deleteRecord(tableOperation.table, {
        id,
        ...options,
      });
    },

    async deleteMany(query, options = {}) {
      if (!query) {
        return Promise.reject(new Error('Missing required query parameter'));
      }

      return deleteRecord(tableOperation.table, {
        query,
        ...options,
      });
    },

    async count(query) {
      return this.table.setQuery(query).count();
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
