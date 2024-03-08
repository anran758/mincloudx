export = TableRecord;
declare class TableRecord extends BaseRecord {
  constructor(tableID: any, recordID: any, queryObject?: Record<any, any>);
  _tableID: any;
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
}
import BaseRecord = require('./BaseRecord');
