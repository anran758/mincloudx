export = WechatProfitSharingOrder;
declare class WechatProfitSharingOrder extends BaseQuery {
  get finish(): (data: any) => any;
  get refund(): (data: any) => any;
  get getRefundmentOrder(): (data: any) => any;
  getOrderList(params?: Record<any, any>): any;
}
import BaseQuery = require('./BaseQuery');
