export = UserRecord;
declare class UserRecord extends BaseRecord {
  constructor(userID: any, queryObject?: Record<any, any>);
  _queryObject: Record<any, any>;
  save(): any;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  update({
    enableTrigger,
    withCount,
  }?: {
    enableTrigger?: boolean;
    withCount?: any;
  }): any;
  setAccount(data: any): any;
}
import BaseRecord = require('./BaseRecord');
