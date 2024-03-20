export declare namespace FaaS {
  /**
   * MinCloud function event
   * @see {@link https://doc.minapp.com/cloud-function/node-sdk/start/code-format.html}
   */
  interface Event<Data = Record<any, any>> {
    timeLimitInMS: number;
    eventType:
      | /** CLI invocation */ null
      | /** Called by MinCloud backend, mini program */ 'sdk'
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
      | /** User backend */ 'user_dash';
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
    /** true when invoked by CLI, MinCloud backend */
    debug: boolean;
    timezone: string;
    jobId: string;
    /**
     * @description Parameters passed when the cloud function is called by the user
     */
    data: Data;
  }

  /**
   * Structure of Trigger v2
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

  type MainCallback = (err: any, data: any) => any;

  type UserDefinedFunctionResponse = Record<string | number, any>;

  type UserDefinedFunction<T extends object = any> = (
    event: Event<T>,
    callback?: MainCallback,
  ) => // TODO: need supports normal function
  Promise<UserDefinedFunctionResponse>;
}
