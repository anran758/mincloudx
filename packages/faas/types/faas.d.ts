export declare namespace FaaS {
  /**
   * 云函数触发的事件
   * @see {@link https://doc.minapp.com/cloud-function/node-sdk/start/code-format.html}
   */
  interface Event<Data = any> {
    timeLimitInMS: number;
    eventType:
      | null //  cli 调用
      | 'sdk' // 知晓云后台、小程序调用
      | 'open_api'
      | 'cloud_function'
      | 'flex_schema'
      | 'wechat_pay_success'
      | 'alipay_pay_success'
      | 'qpay_success'
      | 'timer'
      | 'debugger'
      | 'file_operation'
      | 'incoming_webhook'
      | 'wechat_message'
      | 'user_dash'; // 用户后台
    request: {
      meta: {
        ip_address: string;
        user_agent: string;
      };
      user?: {
        avatar_url: string;
        nickname: string;
        id: number;
      };
    };
    signKey: string;
    miniappId: number;
    debug: boolean; // cli、知晓云后台调用时为 true
    timezone: string;
    jobId: string;
    /**
     * @description 在用户调用云函数时传入的参数
     */
    data: Data;
  }

  /**
   * 触发器 v2 版本的结构
   * @see {@link https://doc.minapp.com/support/guide/trigger-v2-guideline.html#%E8%A7%A6%E5%8F%91%E5%99%A8%E6%89%A7%E8%A1%8C%E4%BA%91%E5%87%BD%E6%95%B0%E6%97%B6-eventdata-%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E}
   */
  interface TriggerSchemaV2<
    AfterData extends object,
    BeforeData extends object,
  > {
    after: AfterData;
    before: BeforeData;
    event: string;
    id: string;
    schema_id: number;
    schema_name: string;
    subject: string;
  }

  type MainCallback = (err: any, data: any) => void;

  type UserDefinedFunction<T extends object> = (
    event: Event<T>,
    callback?: MainCallback,
  ) => Promise<Record<string | number, any>>;
}
