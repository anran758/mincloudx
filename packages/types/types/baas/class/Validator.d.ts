export = Validator;
declare class Validator {
  constructor(handlers: any);
  _handlers: any;
  _defaultHandler(): boolean;
  _getHandler(eventType: any): any;
  validate(event: any): any;
}
