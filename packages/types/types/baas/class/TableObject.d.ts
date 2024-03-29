export = TableObject;
declare class TableObject extends BaseQuery {
  constructor(tableID: any);
  _tableID: any;
  create(): TableRecord;
  createMany(
    args: any,
    {
      enableTrigger,
    }?: {
      enableTrigger?: boolean;
    },
  ): Promise<any>;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  delete(
    args: any,
    {
      enableTrigger,
      withCount,
    }?: {
      enableTrigger?: boolean;
      withCount?: any;
    },
  ): Promise<any>;
  getWithoutData(args: any): TableRecord;
  get(recordID: any): Promise<any>;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): Promise<any>;
  count(): Promise<number>;
  importData(
    {
      dataFileUrl,
      dataFile,
    }: {
      dataFileUrl: any;
      dataFile: any;
    },
    fileType: any,
  ): Promise<any>;
  exportData(fileType: any, mode: any, start: any, end: any): Promise<any>;
}
import BaseQuery = require('./BaseQuery');
import TableRecord = require('./TableRecord');
