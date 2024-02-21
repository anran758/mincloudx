import rc from 'rc';
import osenv from 'osenv';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import ini from 'ini';

import { APP_NAME, MIN_CLOUD_KEY } from './constant';
import type { Config } from './type.d';
import { decodeTokens } from '../utils/token';
import { checkPathExists } from '@/utils';

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
};

export function getConfig(args?: Mapping): Config {
  const config = {
    ...rc(APP_NAME, DEFAULT_CONFIG, args),
  };
  if (
    !checkPathExists(`.${APP_NAME}rc`) &&
    checkPathExists(`.${MIN_CLOUD_KEY}rc`)
  ) {
    // 没有使用默认 rc 配置，但使用了知晓云官方的 rc 配置
    const minCloudConfig = rc(MIN_CLOUD_KEY, DEFAULT_CONFIG, args);

    // 仅读取 client_id 兼容
    config.client_id = minCloudConfig.client_id;
  }

  return config;
}

/**
 * 更新全局 rc 配置
 *
 * @description 本地临时配置都储存在 user 目录下的 rc 文件中
 */
export function updateConfig(data: Mapping) {
  // 默认配置不应污染 rc 文件的值
  const conf = rc(APP_NAME);
  const rootRcFilePath = path.join(DEFAULT_CONFIG.os_home, `.${APP_NAME}rc`);

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
