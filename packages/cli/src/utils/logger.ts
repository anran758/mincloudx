import log from 'npmlog';
import os from 'os';

import { APP_NAME } from '@/config/constant';

export function initLogger(logLevel?: string) {
  log.heading = APP_NAME;
  if (logLevel) {
    log.level = logLevel;
  }
}

/**
 * 简易版日志输出系统
 */
export function createLogger(name: string) {
  // handle log.success()
  log.addLevel('success', 3001, { fg: 'green', bold: true });

  // emit all buffered logs at configured level and higher
  log.resume();
  return log['newGroup'](name);
}

export function output(...args: any[]) {
  log.clearProgress();
  console.log(...args);
  log.showProgress();
}

/**
 * 生成日志格式，后续考虑用第三方库来处理
 */
export function generatorLog(list: (string | string[])[] = []) {
  const logs: string[] = [];
  list.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(str => {
        logs.push(str.length ? `  ${str}` : '');
      });
    } else {
      logs.push(item);
    }
  });

  return logs.join(os.EOL);
}
