import type { IncomingHttpHeaders } from 'http';
import type { BaaS } from '@mincloudx/types';

interface OperatorData {
  [key: string | number]: any;
}

export type RecordId = string | number;

export interface MinCloudResponse<Data = any> {
  status: number;
  statusText: string;
  headers: IncomingHttpHeaders;
  data: Data;
}

export interface BasicOperationOptions<Plain extends boolean = true> {
  plain?: Plain;
}

export interface TableRecord {
  id: RecordId;
  [key: string | number]: any;
}

export interface BatchActionParams {
  enableTrigger?: boolean;
  withCount?: boolean;
  expand?: string | string[];
}

export type OperationResult<Data = Record<string, any>> = (
  | { success: Data }
  | {
      error: {
        code: number;
        err_msg: string;
      };
    }
)[];

/**
 * The data format returned by batch operations
 */
export interface BatchActionResult<RecordData = Record<string, any>> {
  operation_result: OperationResult<RecordData>;
  succeed: number;
  total_count: number;
  next: string | null;
  offset: number;
  limit: number;
}

export type CreateManyResult = Pick<
  BatchActionResult<{ id: string; created_at: number }>,
  'operation_result' | 'succeed' | 'total_count'
>;

export type QueryOperationOptions = BasicOperationOptions &
  Omit<BatchActionParams, 'enableTrigger'> & {
    select?: string[];
  };

export type UpdateOperation = BasicOperationOptions &
  Omit<BatchActionParams, 'expand'> & {
    id?: RecordId;
    query?: BaaS.Query;
    data?: Record<string | number, any>;
    unset?: Record<string | number, any>;
    incrementBy?: Record<string | number, any>;
    append?: Record<string | number, any>;
    uAppend?: Record<string | number, any>;
    remove?: Record<string | number, any>;
    patchObject?: Record<string | number, any>;
    offset?: number;
    limit?: number;
  };

export interface DeleteOperation
  extends Omit<BatchActionParams, 'expand'>,
    BasicOperationOptions {
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
    options?: BasicOperationOptions<Plain>,
  ) => OperationResponse<T & TableRecord, Plain>;
  createMany: <T extends object = OperatorData, Plain extends boolean = true>(
    dataList: Array<T>,
    options?: BasicOperationOptions<Plain> &
      Pick<BatchActionParams, 'enableTrigger'>,
  ) => OperationResponse<CreateManyResult, Plain>;
  get: <T extends object = TableRecord, Plain extends boolean = true>(
    id: RecordId,
    options?: QueryOperationOptions,
  ) => OperationResponse<T, Plain>;
  find: <T extends object = OperatorData, Plain extends boolean = true>(
    query: BaaS.Query,
    options?: QueryOperationOptions & { orderBy?: string | string[] },
  ) => OperationResponse<Array<T>, Plain>;
  update: <T extends object = OperatorData, Plain extends boolean = true>(
    id: UpdateOperation['id'],
    options: Omit<UpdateOperation, 'id' | 'query'>,
  ) => OperationResponse<T & TableRecord, Plain>;
  updateMany: <Plain extends boolean = true>(
    options: Omit<UpdateOperation, 'id' | 'offset' | 'limit'>,
  ) => OperationResponse<
    BatchActionResult<{ id: string; updated_at: number }>,
    Plain
  >;
  delete: (
    id: DeleteOperation['id'],
    options?: Omit<DeleteOperation, 'id' | 'query' | 'plain'>,
  ) => OperationResponse<'', false>;
  deleteMany: <Plain extends boolean = true>(
    query: DeleteOperation['query'],
    options?: Omit<DeleteOperation, 'id' | 'query'>,
  ) => OperationResponse<
    Pick<BatchActionResult, 'succeed' | 'offset' | 'limit' | 'next'>,
    Plain
  >;
  count: (query: BaaS.Query) => Promise<number>;
}
