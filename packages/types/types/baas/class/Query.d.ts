export = Query;
declare class Query {
  static and(...queryObjects: any[]): Query;
  static or(...queryObjects: any[]): Query;
  queryObject: Record<any, any>;
  compare(key: any, operator: any, value: any): Query;
  contains(key: any, str: any): Query;
  matches(key: any, regExp: any): Query;
  in(key: any, arr: any): Query;
  notIn(key: any, arr: any): Query;
  arrayContains(key: any, arr: any): Query;
  isNull(key: any): Query;
  isNotNull(key: any): Query;
  exists(key: any): Query;
  notExists(key: any): Query;
  include(key: any, point: any): Query;
  within(key: any, polygon: any): Query;
  withinCircle(key: any, point: any, radius: any): Query;
  withinRegion(
    key: any,
    point: any,
    maxDistance: any,
    minDistance?: number,
  ): Query;
  hasKey(key: any, fieldName: any): Query;
  _setQueryObject(queryObject: any): void;
  _addQueryObject(key: any, obj: any): void;
  _parseRegExp(regExp: any): any[];
}
