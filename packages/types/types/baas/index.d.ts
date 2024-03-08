import Content = require('./class/Content');
import ContentGroup = require('./class/ContentGroup');
import ContentCategory = require('./class/ContentCategory');
import File = require('./class/File');
import FileCategory = require('./class/FileCategory');
import GeoPoint = require('./class/GeoPoint');
import GeoPolygon = require('./class/GeoPolygon');
import Query = require('./class/Query');
import TableObject = require('./class/TableObject');
import User = require('./class/User');
import UserGroup = require('./class/UserGroup');
import UserSuperGroup = require('./class/UserSuperGroup');
import Order = require('./class/Order');
import TableSchema = require('./class/TableSchema');
import RedPack = require('./class/RedPack');
import MobileTopUp = require('./class/MobileTopup');
import PeopleAlive = require('./class/PeopleAlive');
import request = require('./request');
import AlipayProfitSharingOrder = require('./class/AlipayProfitSharingOrder');
import WechatProfitSharingOrder = require('./class/WechatProfitSharingOrder');
import UrlScheme = require('./class/UrlScheme');
import useVersion = require('./useVersion');
import Validator = require('./class/Validator');
export declare const invokeFunction: (
  functionName: any,
  params: any,
  sync?: boolean,
) => any;
export declare const invoke: (
  functionName: any,
  params: any,
  sync?: boolean,
) => any;
export declare const sendEmail: (data: any) => any;
export declare const sendTemplateMessage: (data: any) => any;
export declare const getOrderList: (params: any) => any;
export declare const refund: (data: any) => any;
export declare const wxAccessToken: (signKey: any) => any;
export declare const wxCensorImage: (fileID: any) => any;
export declare const wxCensorText: (text: any) => any;
export declare const wxPromotionTransfer: (data: any) => any;
export declare const sendSmsCode: (params: any) => any;
export declare const sendSmsMessage: (params: any) => any;
export declare const verifySmsCode: ({
  phone,
  code,
  userID,
}: {
  phone: any;
  code: any;
  userID: any;
}) => any;
export declare const getWXACode: (
  type: any,
  params: any,
  cdn: any,
  categoryName: any,
) => any;
export declare const getTemplateMsgTicketCount: (
  options?: Record<any, any>,
) => any;
export declare const getInnerRequest: typeof request.getInnerRequest;
export declare const getOuterRequest: typeof request.getOuterRequest;
export declare const getAsyncJobResult: (id: any) => any;
export declare const getServerDate: () => any;
export declare namespace alipay {
  const sendTemplateMessage_1: (data: any) => any;
  export { sendTemplateMessage_1 as sendTemplateMessage };
  const getTemplateMsgTicketCount_1: (options?: Record<any, any>) => any;
  export { getTemplateMsgTicketCount_1 as getTemplateMsgTicketCount };
  export const getAlipayQRCode: (data: any) => any;
  export namespace profitSharing {
    export const addReceiver: (data: any) => any;
    export const removeReceiver: (data: any) => any;
    export const receiverQuery: (data: any) => any;
    export { AlipayProfitSharingOrder as Order };
  }
  export const censorText: (text: any) => any;
}
export declare namespace qq {
  const sendTemplateMessage_2: (data: any) => any;
  export { sendTemplateMessage_2 as sendTemplateMessage };
  const getTemplateMsgTicketCount_2: (options?: Record<any, any>) => any;
  export { getTemplateMsgTicketCount_2 as getTemplateMsgTicketCount };
  export const censorImage: (fileID: any) => any;
  const censorText_1: (text: any) => any;
  export { censorText_1 as censorText };
  export const sendSubscribeMessage: (options?: Record<any, any>) => any;
  export const getSubscribeMsgTicketCount: (options?: Record<any, any>) => any;
}
export declare namespace baidu {
  const sendTemplateMessage_3: (data: any) => any;
  export { sendTemplateMessage_3 as sendTemplateMessage };
  const getTemplateMsgTicketCount_3: (options?: Record<any, any>) => any;
  export { getTemplateMsgTicketCount_3 as getTemplateMsgTicketCount };
}
export declare namespace wechat {
  export namespace profitSharing_1 {
    const addReceiver_1: (data: any) => any;
    export { addReceiver_1 as addReceiver };
    const removeReceiver_1: (data: any) => any;
    export { removeReceiver_1 as removeReceiver };
    export { WechatProfitSharingOrder as Order };
  }
  export { profitSharing_1 as profitSharing };
  export namespace livestreaming {
    const getRoomList: (offset: any, limit: any) => any;
    const getPlaybackList: (room_id: any, offset: any, limit: any) => any;
  }
  export const decryptData: (data: any) => any;
  const sendSubscribeMessage_1: (options?: Record<any, any>) => any;
  export { sendSubscribeMessage_1 as sendSubscribeMessage };
  const getSubscribeMsgTicketCount_1: (options?: Record<any, any>) => any;
  export { getSubscribeMsgTicketCount_1 as getSubscribeMsgTicketCount };
  export const getUserRiskRank: (options?: Record<any, any>) => any;
  export const createActivityID: (options?: Record<any, any>) => any;
  export { UrlScheme };
}
export declare namespace bytedance {
  const sendTemplateMessage_4: (data: any) => any;
  export { sendTemplateMessage_4 as sendTemplateMessage };
  const getTemplateMsgTicketCount_4: (options?: Record<any, any>) => any;
  export { getTemplateMsgTicketCount_4 as getTemplateMsgTicketCount };
  export const getQRCode: ({
    appName,
    path,
    platform,
    width,
    lineColor,
    background,
    setIcon,
    categoryName,
    categoryId,
  }: {
    appName: any;
    path: any;
    platform: any;
    width: any;
    lineColor: any;
    background: any;
    setIcon: any;
    categoryName: any;
    categoryId: any;
  }) => any;
}
export declare const VERSION: any;
export {
  Content,
  ContentGroup,
  ContentCategory,
  File,
  FileCategory,
  GeoPoint,
  GeoPolygon,
  Query,
  TableObject,
  User,
  UserGroup,
  UserSuperGroup,
  Order,
  TableSchema,
  RedPack,
  MobileTopUp,
  PeopleAlive,
  useVersion,
  Validator,
};
