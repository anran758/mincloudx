import { Query } from './query';
import { Db } from './db';
import { DocumentReference } from './document';

/**
 * 数据库表模块
 *
 * @description 数据表集合。为了安全起见，目前不提供对集合本身做操作
 */
export class CollectionReference extends Query {
  /**
   * 初始化
   *
   * @internal
   *
   * @param db    - 数据库的引用
   * @param coll  - 集合名称
   */
  constructor(db: Db, coll: string) {
    super(db, coll);
  }

  /**
   * 获取文档的引用
   *
   * @param docID - 文档ID
   */
  doc(docID?: string | number): DocumentReference {
    if (typeof docID !== 'string' && typeof docID !== 'number') {
      throw new Error('docId 必须为字符串或数字');
    }

    return new DocumentReference(this._db, this._coll, docID);
  }
}
