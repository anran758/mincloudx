export = UrlScheme;
declare class UrlScheme extends BaseQuery {
  /**
   * 获取微信小程序 URL Scheme 码列表
   * @return {*}
   */
  getUrlSchemeList(): any;
  /**
   * 获取单个微信小程序 URL Scheme 码
   * @param id
   * @return {*}
   */
  get(id: any): any;
  /**
   * 创建单个微信小程序 URL Scheme 码
   * @param options
   */
  generate(options?: Record<any, any>): any;
  /**
   * 删除单个微信小程序 URL Scheme 码
   * @param id
   */
  delete(id: any): any;
}
import BaseQuery = require('./BaseQuery');
