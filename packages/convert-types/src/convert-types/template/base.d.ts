type Int = number;
type SchemaId = string | Int;
type EpochSeconds = Int & { seconds_since_the_unix_start: never };
type JSONString = string & { json_parsable_string: never };
type HTMLText = string & { html_content: never };
type ValueOf<T> = T[keyof T];
type KeyOf<T> = Array<keyof T>;

/**
 * 数据的默认值
 */
type Default<T> = T;

interface PointerWithoutData {
  id: SchemaId;
  _table: string;
}

type SchemaPointer<T extends BaseSchemaObject> = T | PointerWithoutData;

type CreatedBy = UserProfile | PointerWithoutData | Int

interface BaseSchemaObject {
  _id: Int;
  id: SchemaId;
  created_at: Int;
  updated_at: Int;
  created_by?: CreatedBy;
  read_perm: string[];
  write_perm: string[];
}
