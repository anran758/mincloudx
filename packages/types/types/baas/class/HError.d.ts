export = HError;
declare class HError {
  constructor(code: any, msg: any);
  mapErrorMessage(
    code: any,
  ):
    | 'uninitialized'
    | 'network disconnected'
    | 'request timeout'
    | 'unauthorized'
    | 'session missing'
    | 'incorrect parameter type'
    | 'payment cancelled'
    | 'payment failed'
    | 'save failed'
    | 'unknown error';
}
