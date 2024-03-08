export = Content;
declare class Content extends BaseQuery {
  constructor(groupID: any);
  _groupID: any;
  _defaultQuery: Query;
  get(contentID: any): any;
  create(): ContentRecord;
  getWithoutData(contentID: any): ContentRecord;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): any;
  count(): any;
  delete(contentID: any): any;
}
import BaseQuery = require('./BaseQuery');
import Query = require('./Query');
import ContentRecord = require('./ContentRecord');
