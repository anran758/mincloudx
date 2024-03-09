export = ContentCategory;
declare class ContentCategory extends BaseQuery {
  constructor(groupID: any);
  _groupID: any;
  get(categoryID: any): any;
  /**
   * 设置 withCount 默认值为 true，以兼容旧的用法
   */
  find({ withCount }?: { withCount?: any }): any;
  count(): any;
  create(data: any): any;
  update(categoryID: any, data: any): any;
  delete(categoryID: any): any;
}
import BaseQuery = require('./BaseQuery');
