import chalk from 'chalk';
import log from 'npmlog';

/**
 * 简易版日志输出系统
 */
export function createLogger({ prefix = '' } = {}) {
  const handler = {
    get(target, propKey, receiver) {
      if (typeof target[propKey] === 'function') {
        return (...args) => {
          const message = args.join(' ');
          if (!prefix) return console[propKey](message);

          const levelStyles = {
            error: chalk.red,
            warn: chalk.yellow,
            info: chalk.green,
          };
          // 样式化前缀
          const styledPrefix = chalk.bold(
            levelStyles[propKey] ? levelStyles[propKey](prefix) : prefix,
          );

          // 调用对应的 console 方法，仅前缀部分带颜色
          console[propKey](`${styledPrefix} ${message}`);
        };
      }
      return Reflect.get(target, propKey, receiver);
    },
  };

  const logger = new Proxy(console, handler);
  return logger;
}

export function output(...args: any[]) {
  log.clearProgress();
  console.log(...args);
  log.showProgress();
}
