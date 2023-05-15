import { Db } from './db';

/**
 * 查询接口
 **/
export class Query {
  /**
   * 数据库引用
   *
   * @internal
   */
  protected _db: Db;

  /**
   * Collection name
   *
   * @internal
   */
  protected _coll: string;

  /**
   * 过滤条件
   *
   * @internal
   */
  private _fieldFilters: object;

  public constructor(db: Db, coll: string, fieldFilters?: object) {
    this._db = db;
    this._coll = coll;
    this._fieldFilters = fieldFilters;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public where(query: object) {
    return new Query(this._db, this._coll);
  }
}
