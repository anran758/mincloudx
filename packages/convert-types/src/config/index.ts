/**
 * 默认表映射
 */
export const TABLE_NAME_MAPPING = {
  _userprofile: 'UserProfile',
  _richtextcontent: 'RichTextContent',
};

export const FIELD_TYPE_MAP = {
  integer: 'Int',
  file: 'WechatBaaS.FileOperationResult',
};

// note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
export const packageInfo: {
  name: string;
  description: string;
  version: string;
} = require('../../package.json');
