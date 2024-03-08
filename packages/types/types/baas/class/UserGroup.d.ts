export = UserGroup;
declare class UserGroup extends BaseQuery {
  /**
   * 获取用户组信息
   * @param groupID
   * @return {*}
   */
  get(groupID: any): any;
  /**
   * 创建用户组
   * @param name
   * @param parent
   */
  create({ name, parent }: { name: any; parent: any }): any;
  /**
   * 修改用户组
   * @param groupID
   * @param data
   */
  update(groupID: any, data: any): any;
  /**
   * 批量删除用户组
   * @param {Array} ids
   */
  delete(ids: any[]): any;
  /**
   * 将用户加入组
   * @param users
   * @param groups
   */
  addUserIntoGroup(users: any, groups: any): any;
  /**
   * 将用户移除用户组
   * @param users
   * @param groups
   */
  removeUserFromGroup(users: any, groups: any): any;
  /**
   * 查询用户组
   * @param parentID 用户组的组集 ID
   * @return {*}
   */
  getUserGroupList({ parentID }: { parentID: any }): any;
}
import BaseQuery = require('./BaseQuery');
