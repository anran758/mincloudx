export = MobileTopup;
declare class MobileTopup extends BaseQuery {
  getMobileTopUpList(params: any): any;
  topUpMobile(data: any): any;
}
import BaseQuery = require('./BaseQuery');
