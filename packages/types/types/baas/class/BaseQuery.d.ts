export = BaseQuery;
declare class BaseQuery {
  _initQueryParams(): void;
  _queryObject: any;
  _limit: any;
  _offset: any;
  _orderBy: any;
  _keys: any;
  _expand: any;
  setQuery(queryObject: any): this;
  select(args: any): this;
  expand(args: any): this;
  limit(value: any): this;
  offset(value: any): this;
  orderBy(args: any): this;
  _handleAllQueryConditions(): {
    limit: any;
    offset: any;
    order_by: any;
    keys: any;
    expand: any;
    where: string;
  };
}
