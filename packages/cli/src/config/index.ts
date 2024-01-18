import rc from 'rc';
import osenv from 'osenv';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import ini from 'ini';

import { APP_NAME } from './constant';
import type { Config } from './type.d';
import { decodeTokens } from '../utils/token';

type Mapping = Record<number | string, unknown>;

const IGNORE_CONFIG_KEYS = ['_', 'configs', 'config'];

/**
 * 默认配置
 *
 * @description 项目全局配置，键名采用下划线命名法。可通过 .${APP_NAME}rc 文件中进行覆盖默认配置
 */
export const DEFAULT_CONFIG = {
  base_url: 'https://cloud.minapp.com/',
  os_home: osenv.home(),
  prefix: APP_NAME,
};

export function getConfig(args?: Mapping): Config {
  const config = rc(APP_NAME, DEFAULT_CONFIG, args);
  const minCloudConfig = rc(APP_NAME, DEFAULT_CONFIG, args);

  return {
    // 若没有使用 mincloudx 的配置，则默认从官方提供的 .mincloudrc 中取 client_id
    client_id: minCloudConfig.client_id,
    ...config,
  };
}

/**
 * 更新全局 rc 配置
 *
 * @description 本地临时配置都储存在 user 目录下的 rc 文件中
 */
export function updateConfig(data: Mapping) {
  // 默认配置不应污染 rc 文件的值
  const conf = rc(APP_NAME);

  const prefix = conf.prefix || DEFAULT_CONFIG.prefix;
  const rootRcFilePath = path.join(DEFAULT_CONFIG.os_home, `.${prefix}rc`);

  // 检测 user 路径下是否存在配置表，不存在则创建一个
  if (!fs.existsSync(rootRcFilePath)) {
    fs.writeFileSync(rootRcFilePath, '');
  }

  const newConf = { ...data };
  Object.keys(conf).forEach(key => {
    // 采用最新的数据
    if (newConf[key]) return;

    // rc 属性不储存
    if (IGNORE_CONFIG_KEYS.includes(key)) return;

    newConf[key] = conf[key];
  });

  // 写入 ini 格式
  return writeFile(rootRcFilePath, ini.stringify(newConf), 'utf8');
}

/**
 * 从缓存中读取知晓云的 token
 */
export function getToken(clientId?: string, args?: Mapping) {
  const conf = getConfig(args);
  const id = clientId || conf.client_id;

  return id && conf.tokens ? decodeTokens(conf.tokens)[id] : '';
}

export default getConfig();
