export = User;
declare class User extends BaseQuery {
  create(): UserRecord;
  get(userID: any): any;
  getWithoutData(args: any): UserRecord;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): any;
  count(): any;
  delete(userID: any): any;
}
declare namespace User {
  export { stripGroupQuery as _stripGroupQuery };
}
import BaseQuery = require('./BaseQuery');
import UserRecord = require('./UserRecord');
/**
 * 剥离 _group 查询
 * @param queryObj
 */
declare function stripGroupQuery(queryObj: any): any;
