export = Order;
declare class Order extends BaseQuery {
  get wechatPay(): {
    profitSharing: (data: any) => any;
    multiProfitSharing: (data: any) => any;
  };
  get alipay(): {
    profitSharing: (data: any) => any;
  };
  getOrderList(params?: Record<any, any>): any;
}
import BaseQuery = require('./BaseQuery');
