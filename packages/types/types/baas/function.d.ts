export function invokeFunction(
  functionName: any,
  params: any,
  sync?: boolean,
): any;
export function invoke(functionName: any, params: any, sync?: boolean): any;
export function sendEmail(data: any): any;
export function sendTemplateMessage(data: any): any;
export function sendAlipayTemplateMessage(data: any): any;
export function sendQQTemplateMessage(data: any): any;
export function sendBaiduTemplateMessage(data: any): any;
export function sendBytedanceTemplateMessage(data: any): any;
export function getOrderList(params: any): any;
export function refund(data: any): any;
export function wxAccessToken(signKey: any): any;
export function wxAccessToken(signKey: any): any;
export function wxCensorImage(fileID: any): any;
export function wxCensorImage(fileID: any): any;
export function wxCensorText(text: any): any;
export function wxCensorText(text: any): any;
export function wxDecryptData(data: any): any;
export function wxDecryptData(data: any): any;
export function qqCensorImage(fileID: any): any;
export function qqCensorImage(fileID: any): any;
export function qqCensorText(text: any): any;
export function qqCensorText(text: any): any;
export function alipayCensorText(text: any): any;
export function alipayCensorText(text: any): any;
export function wxPromotionTransfer(data: any): any;
export function wxPromotionTransfer(data: any): any;
export function sendSmsCode(params: any): any;
export function sendSmsCode(params: any): any;
export function sendSmsMessage(params: any): any;
export function sendSmsMessage(params: any): any;
export function verifySmsCode({
  phone,
  code,
  userID,
}: {
  phone: any;
  code: any;
  userID: any;
}): any;
export function verifySmsCode({
  phone,
  code,
  userID,
}: {
  phone: any;
  code: any;
  userID: any;
}): any;
export function updateWeChatUserInfo(
  userID: any,
  authData: any,
  {
    syncUserProfile,
  }?: {
    syncUserProfile?: string;
  },
): any;
export function updateWeChatUserInfo(
  userID: any,
  authData: any,
  {
    syncUserProfile,
  }?: {
    syncUserProfile?: string;
  },
): any;
export function getWXACode(
  type: any,
  params: any,
  cdn: any,
  categoryName: any,
): any;
export function getWXACode(
  type: any,
  params: any,
  cdn: any,
  categoryName: any,
): any;
export function getTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getAlipayTemplateMsgTicketCount(
  options?: Record<any, any>,
): any;
export function getAlipayTemplateMsgTicketCount(
  options?: Record<any, any>,
): any;
export function getQQTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getQQTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getBaiduTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getBaiduTemplateMsgTicketCount(options?: Record<any, any>): any;
export function getBytedanceTemplateMsgTicketCount(
  options?: Record<any, any>,
): any;
export function getBytedanceTemplateMsgTicketCount(
  options?: Record<any, any>,
): any;
export function getWxSubscribeMsgTicketCount(options?: Record<any, any>): any;
export function getWxSubscribeMsgTicketCount(options?: Record<any, any>): any;
export function getQQSubscribeMsgTicketCount(options?: Record<any, any>): any;
export function getQQSubscribeMsgTicketCount(options?: Record<any, any>): any;
export function sendWechatSubscribeMessage(options?: Record<any, any>): any;
export function sendWechatSubscribeMessage(options?: Record<any, any>): any;
export function sendQQSubscribeMessage(options?: Record<any, any>): any;
export function sendQQSubscribeMessage(options?: Record<any, any>): any;
export function getAlipayQRCode(data: any): any;
export function getAlipayQRCode(data: any): any;
export function getAsyncJobResult(id: any): any;
export function getAsyncJobResult(id: any): any;
export function getWxUserRiskRank(options?: Record<any, any>): any;
export function getWxUserRiskRank(options?: Record<any, any>): any;
export function createWxActivityID(options?: Record<any, any>): any;
export function createWxActivityID(options?: Record<any, any>): any;
