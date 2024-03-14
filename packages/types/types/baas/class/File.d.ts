export = File;
declare class File extends BaseQuery {
  delete(id: any): any;
  get(fileID: any): any;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): any;
  createDownloadTask(...args: any[]): any;
  getDownloadTaskResult(...args: any[]): any;
  count(): any;
  upload(uploadFile: any, fileMeta: any): Promise<any>;
  purgeCache(operation_type: any, content: any): any;
  getPurgeCacheHistory(params: any): any;
}
import BaseQuery = require('./BaseQuery');
