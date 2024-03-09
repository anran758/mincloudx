export = BaseRecord;
declare class BaseRecord {
  constructor(recordID: any);
  _recordID: any;
  _recordValueInit(): void;
  _record: {
    $set: Record<any, any>;
    $unset: Record<any, any>;
  };
  set(...args: any[]): BaseRecord;
  unset(...args: any[]): BaseRecord;
  incrementBy(key: any, value: any): BaseRecord;
  append(key: any, value: any): BaseRecord;
  uAppend(key: any, value: any): BaseRecord;
  remove(key: any, value: any): BaseRecord;
  patchObject(key: any, value: any): BaseRecord;
  pop(key: any): BaseRecord;
  shift(key: any): BaseRecord;
}
declare namespace BaseRecord {
  export { _serializeValueFuncFactory };
}
declare function _serializeValueFuncFactory(
  config?: string[],
): (value: any) => any;
