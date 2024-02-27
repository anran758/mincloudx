import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { AxiosError } from 'axios';

import { readFile } from 'fs/promises';
import type { Command } from 'commander';
import { program as globalProgram } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';
import { createCloudFunction, updateCloudFunction } from '@/request/api';

const COMMAND_NAME = 'debug';
const logger = createLogger({ prefix: `[${COMMAND_NAME}]` });
const defaultConfig = {
  entryDir: './src/function',
  outputPath: './dist',
  mockDir: './mock',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName?: string;
};

export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Debug a specify cloud function.')
    .option(
      '--entry-dir <value>',
      '存放云函数源码目录的路径',
      defaultConfig.entryDir,
    )
    .option(
      '--output-dir <value>',
      '云函数构建文件输出目录',
      defaultConfig.outputPath,
    )
    .option('--mock-dir <value>', 'mock data directory', defaultConfig.mockDir)
    .action((options: BuildFaasParams) => {
      console.log('debug', options);
    });
}
