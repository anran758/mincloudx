import * as packageInfo from '../../package.json';

export const APP_NAME = 'mincloudx';
export const MIN_CLOUD_KEY = 'mincloud';

/**
 * 默认表映射
 */
export const TABLE_NAME_MAPPING = {
  _userprofile: 'UserProfile',
  _richtextcontent: 'RichTextContent',
};

export const FIELD_TYPE_MAP = {
  integer: 'number',
  file: 'FileOperationResult',
  object: 'Record<string | number, any>',
};

export { packageInfo };
