/// <reference path="./scheme/_userprofile.d.ts" />

type Int = number;
type SchemaId = string | Int;
type EpochSeconds = Int & { seconds_since_the_unix_start: never };
type JSONString = string & { json_parsable_string: never };
type HTMLText = string & { html_content: never };
type ValueOf<T> = T[keyof T];
type KeyOf<T> = Array<keyof T>;
type Default<T> = T; // 数据的默认值

interface IPointerWithoutData {
  id: SchemaId;
  _table: string;
}

type ISchemaPointer<T extends IBaseSchemaObject> = T | IPointerWithoutData;

type ICreatedBy = IUserProfileSchema | IPointerWithoutData | Int

interface IBaseSchemaObject {
  _id: Int;
  id: SchemaId;
  created_at: Int;
  updated_at: Int;
  created_by?: ICreatedBy;
  read_perm: string[];
  write_perm: string[];
}

declare enum WechatGender {
  Male = 1,
  Female = 2,
  Unknown = 3,
}
