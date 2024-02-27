import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { AxiosError } from 'axios';

import { readFile } from 'fs/promises';
import type { Command } from 'commander';
import { program as globalProgram } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';
import { createCloudFunction, updateCloudFunction } from '@/request/api';
import { buildFunction } from './build';
import { deployFunction } from './deploy';
import { invokeMockData } from './mock';

const COMMAND_NAME = 'debug';
const logger = createLogger(COMMAND_NAME, 'verbose');

// TODO: There are variables here that can be shared.
const defaultConfig = {
  entryDir: './src/function',
  distDir: './dist',
  outputDir: './log',
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
    .argument('[functionName]', 'Cloud function name.')
    .option(
      '--entry-dir <value>',
      'Cloud function source code directory',
      defaultConfig.entryDir,
    )
    .option(
      '--dist-dir <value>',
      'Cloud function built file output directory',
      defaultConfig.distDir,
    )
    .option(
      '--output-dir <value>',
      '云函数构建文件输出目录',
      defaultConfig.outputDir,
    )
    .option('--mock-dir <value>', 'mock data directory', defaultConfig.mockDir)
    .action(async (functionName, options: BuildFaasParams) => {
      logger.verbose('verbose', 'function name:', functionName);
      logger.verbose('verbose', 'debug options:', options);
      const name = functionName;
      if (!name) {
        logger.error('debug', 'Please input cloud function name.');
        return;
      }

      const { entryDir, distDir, outputDir, mockDir } = options;
      await buildFunction({
        entryDir,
        outputDir: distDir,
        functionName: name,
      });

      await deployFunction({ deployDir: distDir, functionName: name });
      await invokeMockData({
        functionName: name,
        dir: mockDir,
        output: outputDir,
      });
    });
}
