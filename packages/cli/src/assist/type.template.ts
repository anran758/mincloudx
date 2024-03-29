/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */

export type SchemaId = string | number;

/**
 * Fields ending in "_at" are conventionally designated as timestamp fields.
 **/
export type EpochSeconds = number & { seconds_since_the_unix_start: never };
export type JSONString = string & { json_parsable_string: never };
export type HTMLText = string & { html_content: never };
export type ValueOf<T> = T[keyof T];
export type KeyOf<T> = Array<keyof T>;
export type Default<T = undefined> = T;

export interface BaseTable {
  _id: SchemaId;
  id: SchemaId;
  created_at: number;
  updated_at: number;
  created_by: CreatedBy;
  read_perm: string[];
  write_perm: string[];
}

interface UserProfile extends BaseTable {}

export interface PointerWithoutData {
  id: SchemaId;
  _table: string;
}

export type SchemaPointer<T extends BaseTable> = T | PointerWithoutData;

export type CreatedBy = UserProfile | PointerWithoutData | number;

/**
 * MinCloud File operation result
 */
export interface FileOperationResult {
  /**
   * Record ID
   */
  _id: string;
  /**
   * created time (in Unix timestamp format)
   */
  created_at: number;
  /**
   * Path
   */
  path: string;
  /**
   * created record user ID
   */
  created_by: number;
  /**
   * Mime type
   */
  mime_type: string;
  /**
   * Media type
   */
  media_type: string;
  /**
   * File size
   */
  size: number;
  /**
   * File name
   */
  name: string;
  /**
   * File status
   */
  status: string;
  /**
   * Reference
   */
  reference: string;
  /**
   * CDN path
   */
  cdn_path: string;
  /**
   * Integer. Updated time (in Unix timestamp format)
   */
  updated_at: number;
  /**
   * File categories
   */
  categories: string[];
}
