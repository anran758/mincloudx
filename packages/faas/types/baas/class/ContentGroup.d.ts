export = ContentGroup;
declare class ContentGroup extends BaseQuery {
  static get(id: any): any;
  static find({
    offset,
    limit,
    withCount,
  }?: {
    offset?: number;
    limit?: number;
    withCount?: boolean;
  }): any;
  constructor(contentGroupID: any);
  _contentGroupID: any;
  getContent(richTextID: any): any;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): any;
  count(): any;
  getCategory(categoryID: any): any;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  getCategoryList({ withCount }?: { withCount?: any }): any;
}
import BaseQuery = require('./BaseQuery');
