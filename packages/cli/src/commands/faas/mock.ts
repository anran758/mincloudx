import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import importFresh from 'import-fresh';
import { isFunction, isPlainObject } from 'lodash';
import os from 'os';

import type { Command } from 'commander';

import {
  getBaseType,
  createLogger,
  resolveCwdAbsolutePath,
  writeFile,
  formatBytes,
  generatorLog,
} from '@/utils';
import { invokeCloudFunction } from '@/request/api';

const COMMAND_NAME = 'mock';
const logger = createLogger(COMMAND_NAME);
const defaultConfig = {
  dir: './mock',
  output: './log',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName: string;
};

function formatResult(data) {
  const content: (string | string[])[] = [
    `测试结果：${data.code ? '失败' : '成功'}`,
  ];

  const result = [`返回结果：`];
  if (data.code) {
    result.push(
      `错误类型：${data.error.type}`,
      `错误信息：${data.error.message}`,
      `错误堆栈：${data.error.stack}`,
    );
  } else {
    if (isPlainObject(data.data)) {
      result.push(...JSON.stringify(data.data, null, 2).split('\n'));
    } else {
      result.push(data.data);
    }
  }
  content.push(result, '');
  content.push(
    '摘要：',
    [
      `任务 ID：${data.job_id}`,
      `运行时间：${data.execution_time} ms`,
      `计费时间：${data.billing_time} ms`,
      `占用内存：${formatBytes(data.mem_usage)}`,
    ],
    '',
  );

  content.push('日志：', data.log.split('\n'));

  return generatorLog(content);
}

export async function invokeMockData({
  functionName,
  ...options
}: BuildFaasParams) {
  if (!functionName) {
    const message = 'Please input cloud function name!';
    logger.error(COMMAND_NAME, message);

    return Promise.reject(new Error(message));
  }

  const folderPath = resolveCwdAbsolutePath(options.dir);
  const mockPath = path.resolve(folderPath, `${functionName}.js`);

  logger.verbose(COMMAND_NAME, 'mockPath:', mockPath);

  let data = {};

  // check mock file exists
  if (!fs.existsSync(mockPath)) {
    logger.notice(COMMAND_NAME, `${mockPath} mock file not found.`);
    logger.notice(
      COMMAND_NAME,
      'This call will use default value `{}` to invoke cloud function.',
    );
  } else {
    // Due to the current inability of import() to handle cases with dynamic variables, we are temporarily compromising by using require to import.
    logger.notice(COMMAND_NAME, `prepare invoke ${mockPath} mock file.`);
    const content: Record<string, any> | typeof Function =
      importFresh(mockPath);

    if (isFunction(content)) {
      data = content();
    } else if (isPlainObject(content)) {
      data = content;
    } else {
      logger.error(
        COMMAND_NAME,
        `${chalk.bold(functionName)} mock file module exports type warning!`,
        `Expected export an object or function, but got ${getBaseType(data)}.`,
      );

      return;
    }
  }

  try {
    const response = await invokeCloudFunction({ name: functionName, data });

    const content = formatResult(response.data);
    const dir = resolveCwdAbsolutePath(options.output);
    const fileName = `${functionName}.log`;
    const result = await writeFile({
      fileName,
      dirPath: dir,
      content,
    });
    logger.success(
      COMMAND_NAME,
      'Invoke result log saved to:',
      path.join(dir, fileName),
    );

    return result;
  } catch (error) {
    let errorStr = error;
    if (error instanceof Error) {
      errorStr = error.message;
    } else if (typeof error !== 'string') {
      errorStr = JSON.stringify(error);
    }

    const errorPath = path.join(
      resolveCwdAbsolutePath(options.output),
      'error.log',
    );
    const errorLog = `[${new Date()}] ${errorStr} ${os.EOL}`;
    fs.appendFile(errorPath, errorLog, function (err) {
      if (err) throw err;
      logger.error(
        COMMAND_NAME,
        'Invoke cloud function error.',
        `Log saved to: ${errorPath}`,
      );
    });
  }
}

/**
 * Invoke cloud function with mock data
 *
 * @example
 * Invoke the "createUser" cloud function without specifying a mock directory:
 * ```
 * mincloudx faas mock createUser
 * ```
 *
 * @example
 * Invoke the "createUser" cloud function with mock data from a specific directory:
 * ```
 * mincloudx faas mock createUser --dir ./mocks
 * ```
 *
 * @example
 * Invoke the "createUser" cloud function and specify a directory for the output logs:
 * ```
 * mincloudx faas mock createUser --out ./logs
 * ```
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Invoke cloud function with mock data')
    .argument('<functionName>', 'Cloud function name.')
    .option('-d, --dir <value>', 'mock data directory', defaultConfig.dir)
    .option(
      '-o, --output <value>',
      'specify the log directory for output',
      defaultConfig.output,
    )
    .action((functionName: string, options: BuildFaasParams) => {
      return invokeMockData({ ...options, functionName });
    });
}
