export = BaseRecord;
declare class BaseRecord {
  constructor(recordID: any);
  _recordID: any;
  _recordValueInit(): void;
  _record: {
    $set: Record<any, any>;
    $unset: Record<any, any>;
  };
  set(...args: any[]): this;
  unset(...args: any[]): this;
  incrementBy(key: any, value: any): this;
  append(key: any, value: any): this;
  uAppend(key: any, value: any): this;
  remove(key: any, value: any): this;
  patchObject(key: any, value: any): this;
  pop(key: any): this;
  shift(key: any): this;
}
declare namespace BaseRecord {
  export { _serializeValueFuncFactory };
}
declare function _serializeValueFuncFactory(
  config?: string[],
): (value: any) => any;
