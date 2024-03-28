import type { IncomingHttpHeaders } from 'http';
import type { BaaS } from '@mincloudx/types';

export type RecordId = string | number;

export interface MinCloudResponse<T = any> {
  status: number;
  statusText: string;
  headers: IncomingHttpHeaders;
  data: T;
}

export interface BasicOperationOptions<Plain extends boolean = true> {
  plain?: Plain;
}

export interface TableRecord {
  id: RecordId;
  [key: string | number]: any;
}

export interface OperatorData {
  [key: string | number]: any;
}

export interface BatchActionParams {
  enableTrigger?: boolean;
  withCount?: boolean;
  expand?: string | string[];
}

export interface BatchActionResult<RecordData = Record<string, any>> {
  operation_result: { success: RecordData }[];
  succeed: number;
  total_count: number;
}

export type QueryOperationOptions = BasicOperationOptions &
  Omit<BatchActionParams, 'enableTrigger'> & {
    select?: string[];
  };

export type UpdateOperationOptions = BasicOperationOptions &
  Omit<BatchActionParams, 'expand'> & {
    data?: Record<string | number, any>;
    unset?: Record<string | number, any>;
    incrementBy?: Record<string | number, any>;
    append?: Record<string | number, any>;
    uAppend?: Record<string | number, any>;
    remove?: Record<string | number, any>;
    patchObject?: Record<string | number, any>;
  };

export interface DeleteOperation extends Omit<BatchActionParams, 'expand'> {
  id?: RecordId;
  query?: BaaS.Query;
  offset?: number;
  limit?: number;
}

export type OperationResponse<
  Data = any,
  Plain extends boolean = true,
> = Plain extends true ? Promise<Data> : Promise<MinCloudResponse<Data>>;

export interface Operation {
  readonly table: BaaS.TableObject;
  create: <T extends object = OperatorData, Plain extends boolean = true>(
    data: T,
    options?: BasicOperationOptions,
  ) => OperationResponse<T & TableRecord, Plain>;
  createMany: <T extends object = OperatorData, Plain extends boolean = true>(
    dataList: Array<T>,
    options?: { plain?: Plain } & Pick<BatchActionParams, 'enableTrigger'>,
  ) => OperationResponse<BatchActionResult<T>, Plain>;
  get: <T extends object = TableRecord, Plain extends boolean = true>(
    id: RecordId,
    options?: QueryOperationOptions,
  ) => OperationResponse<T, Plain>;
  find: <T extends object = OperatorData, Plain extends boolean = true>(
    query: BaaS.Query,
    options?: QueryOperationOptions & { orderBy?: string | string[] },
  ) => OperationResponse<Array<T>, Plain>;
  update: <T extends object = OperatorData, Plain extends boolean = true>(
    id: RecordId,
    options: UpdateOperationOptions,
  ) => OperationResponse<T & TableRecord, Plain>;
  delete: (
    query: DeleteOperation['id'] | DeleteOperation['query'],
  ) => Promise<any>;
  count: (query: BaaS.Query) => Promise<number>;
}
