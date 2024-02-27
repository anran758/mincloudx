import log from 'npmlog';

import { APP_NAME } from '@/config/constant';

/**
 * 简易版日志输出系统
 */
export function createLogger(name: string, loglevel?: string) {
  log.heading = APP_NAME;
  if (loglevel) {
    log.level = loglevel;
  }

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
