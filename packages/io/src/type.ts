import type { IncomingHttpHeaders } from 'http';
import type { BaaS } from '@mincloudx/types';

export interface Meta {
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total_count?: number;
}

export type OperatorData = {
  [key: string | number]: any;
};

export type FindListResponseData<Data = OperatorData> = {
  meta: Meta;
  objects: Data[];
};

export type RecordId = string | number;

export interface MinCloudResponse<Data = any> {
  status: number;
  statusText: string;
  headers: IncomingHttpHeaders;
  data: Data;
}

export interface BasicOperationOptions {
  plain?: boolean;
}

export interface QueryParam {
  offset: number;
  limit: number;
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

export type OperationResult<Data = OperatorData> = (
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
export interface BatchActionResult<RecordData = OperatorData>
  extends QueryParam {
  operation_result: OperationResult<RecordData>;
  succeed: number;
  total_count: number;
  next: string | null;
}

export type CreateManyResult = Pick<
  BatchActionResult<{ id: string; created_at: number }>,
  'operation_result' | 'succeed' | 'total_count'
>;

export type QueryOperationOptions = BasicOperationOptions &
  Omit<BatchActionParams, 'enableTrigger'> &
  Partial<QueryParam> & {
    select?: string[];
    orderBy?: string | string[];
  };

export type UpdateOperation = BasicOperationOptions &
  Omit<BatchActionParams, 'expand'> &
  Partial<QueryParam> & {
    id?: RecordId;
    query?: BaaS.Query;
    data?: Record<string | number, any>;
    unset?: Record<string | number, any>;
    incrementBy?: Record<string | number, any>;
    append?: Record<string | number, any>;
    uAppend?: Record<string | number, any>;
    remove?: Record<string | number, any>;
    patchObject?: Record<string | number, any>;
  };

export interface DeleteOperation
  extends Omit<BatchActionParams, 'expand'>,
    BasicOperationOptions,
    Partial<QueryParam> {
  id?: RecordId;
  query?: BaaS.Query;
}

export type OperationResponse<
  Data = any,
  Plain extends boolean = true,
> = Plain extends true ? Promise<Data> : Promise<MinCloudResponse<Data>>;

export interface Operation {
  readonly table: BaaS.TableObject;
  create: <Data extends object = OperatorData, Plain extends boolean = true>(
    data: Data,
    options?: BasicOperationOptions,
  ) => OperationResponse<Data & TableRecord, Plain>;
  createMany: <
    Data extends object = OperatorData,
    Plain extends boolean = true,
  >(
    dataList: Array<Data>,
    options?: BasicOperationOptions & Pick<BatchActionParams, 'enableTrigger'>,
  ) => OperationResponse<CreateManyResult, Plain>;
  get: <Data extends object = TableRecord, Plain extends boolean = true>(
    id: RecordId,
    options?: Omit<QueryOperationOptions, 'orderBy'>,
  ) => OperationResponse<Data, Plain>;
  find: <Data extends object = OperatorData, Plain extends boolean = true>(
    query: BaaS.Query,
    options?: QueryOperationOptions,
  ) => OperationResponse<FindListResponseData<Array<Data>>, Plain>;
  update: <Data extends object = OperatorData, Plain extends boolean = true>(
    id: UpdateOperation['id'],
    options: Omit<UpdateOperation, 'id' | 'query'>,
  ) => OperationResponse<Data & TableRecord, Plain>;
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
