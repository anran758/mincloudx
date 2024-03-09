export = UserSuperGroup;
declare class UserSuperGroup extends BaseQuery {
  /**
   * 获取特定的组集信息
   * @param superGroupID
   * @return {*}
   */
  get(superGroupID: any): any;
  /**
   * 创建组集
   * @param name 组集的名称
   * @param children 用户组 ID 列表
   */
  create({ name, children }: { name: any; children: any }): any;
  /**
   * 修改组集
   * @param id
   * @param data
   * @param data.name 组集名称
   * @param data.children 用户组 ID 列表
   */
  update(id: any, data: any): any;
  /**
   * 批量删除组集
   * @param ids
   */
  delete(ids: any): any;
  /**
   * 获取组集列表
   * @return {*}
   */
  getUserSuperGroupList(): any;
}
import BaseQuery = require('./BaseQuery');
