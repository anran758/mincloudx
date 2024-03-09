export = BaseQuery;
declare class BaseQuery {
  _initQueryParams(): void;
  _queryObject: any;
  _limit: any;
  _offset: any;
  _orderBy: any;
  _keys: any;
  _expand: any;
  setQuery(queryObject: any): BaseQuery;
  select(args: any): BaseQuery;
  expand(args: any): BaseQuery;
  limit(value: any): BaseQuery;
  offset(value: any): BaseQuery;
  orderBy(args: any): BaseQuery;
  _handleAllQueryConditions(): {
    limit: any;
    offset: any;
    order_by: any;
    keys: any;
    expand: any;
    where: string;
  };
}
