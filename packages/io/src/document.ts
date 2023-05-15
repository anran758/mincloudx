import { Db } from './db';

/**
 * 数据行
 */
export class DocumentReference {
  /**
   * 文档ID
   */
  readonly id: string | number;

  /**
   * 数据库引用
   *
   * @internal
   */
  private _db: Db;

  /**
   * 集合名称
   *
   * @internal
   */
  readonly _coll: string;

  /**
   * 初始化
   *
   * @internal
   *
   * @param db    - 数据库的引用
   * @param coll  - 集合名称
   * @param docID - 文档 ID
   */
  constructor(db: Db, coll: string, docID: string | number) {
    this._db = db;
    this._coll = coll;
    this.id = docID;
  }

  get({ parseRes = true } = {}): Promise<any> {
    const response = {
      statusCode: 200,
      data: {},
    };

    return Promise.resolve(parseRes ? response.data : response);
  }
}
