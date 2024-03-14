// 知晓云数据表列表请求的返回值

export interface Meta {
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total_count: number;
}

export interface DefaultRowPerm {
  _read_perm: string[];
  _write_perm: string[];
}

export interface Option {
  description: string;
  reference_schemas: any[];
}

export interface SchemaField {
  acl: {
    clientReadOnly: boolean;
    clientVisible: boolean;
    creatorVisible: boolean;
  };
  constraints?: {
    required: boolean;
    rules: any[];
  };
  collection_name: string;
  items?: { type: string };
  default: any;
  description: string;
  name: string;
  type: string;
}

export interface Schema {
  fields: SchemaField[];
}

export interface SchemeObject {
  acl_gid?: any;
  acl_permission: number;
  created_at: number;
  default_row_perm: DefaultRowPerm;
  dserve_hidden_columns: any[];
  id: number;
  is_protected: boolean;
  name: string;
  options: Option;
  protected_fields?: any;
  row_acl_gid?: any;
  row_acl_permission?: any;
  row_read_perm: string;
  row_write_perm: string;
  schema: Schema;
  status: string;
  updated_at: number;
  write_perm: string[];
}

export interface SchemaRootObject {
  meta: Meta;
  objects: SchemeObject[];
}
