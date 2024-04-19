import webpack from 'webpack';
import { merge } from 'webpack-merge';
import chalk from 'chalk';

import type { Command } from 'commander';

import {
  createLogger,
  resolveCwdAbsolutePath,
  scanForFunctionEntries,
} from '@/utils';
import { DEFAULT_FUNCTION_DIR, DEFAULT_BUILT_DIR } from './config';

import baseConf from './webpack.base.config';

const COMMAND_NAME = 'build';
const logger = createLogger(COMMAND_NAME);

const defaultConfig = {
  entryDir: DEFAULT_FUNCTION_DIR,
  outputDir: DEFAULT_BUILT_DIR,
};

type BuildFaasParams = typeof defaultConfig & {
  functionName?: string;
};

export function buildFunction({
  entryDir,
  outputDir,
  functionName,
}: BuildFaasParams = defaultConfig) {
  return new Promise((resolve, reject) => {
    const folderPath = resolveCwdAbsolutePath(entryDir);

    logger.log(
      COMMAND_NAME,
      `Preparing to collect cloud function source code from ${folderPath} ...`,
    );

    const pickFiles = functionName ? [functionName] : [];
    const entry = scanForFunctionEntries(folderPath, { pick: pickFiles });

    if (!Object.keys(entry).length && functionName) {
      logger.error(
        COMMAND_NAME,
        `Failed to build cloud function. Please ensure the ${chalk.bold(
          functionName,
        )} are in the entry directory.`,
      );
      return;
    }

    const currentConf = {
      entry,
      output: {
        path: resolveCwdAbsolutePath(outputDir),
      },
    };

    // 后续可以考虑 merge 用户提供的 config
    const conf = merge(baseConf, currentConf);
    const compiler = webpack(conf);

    compiler.run((err, stats) => {
      // 处理构建过程中的错误
      if (err) {
        logger.error(COMMAND_NAME, '构建时发生错误:', err);
        reject(err);
        return;
      }

      // 处理编译过程中的错误
      if (stats?.hasErrors?.()) {
        logger.error(COMMAND_NAME, '构建时遇到错误:');
        logger.error(COMMAND_NAME, stats.toString({ colors: true }));
        reject(stats);
        return;
      }

      // 构建成功
      logger.info(COMMAND_NAME, stats?.toString?.({ colors: true }));
      console.log('');

      logger.success(
        COMMAND_NAME,
        'CloudFunction build completed:',
        conf.output?.path,
      );
      resolve('ok');
    });
  });
}

/**
 * Build cloud function from source code.
 *
 * @example
 * Build all cloud functions using default directories:
 * ```
 * mincloudx faas build
 * ```
 *
 * @example
 * Build a specific cloud function named "createUser":
 * ```
 * mincloudx faas build createUser
 * ```
 *
 * @example
 * Build cloud functions specifying custom source and output directories:
 * ```
 * mincloudx faas build --entry-dir ./src/functions --output-dir ./built
 * ```
 */
export function registerCommand(program: Command) {
  return program
    .command('build')
    .description('Build cloud function from source code.')
    .argument('[functionName]', 'Cloud function name.')
    .option(
      '--entry-dir <value>',
      'Cloud function source code directory',
      defaultConfig.entryDir,
    )
    .option(
      '-o, --output-dir <value>',
      'Cloud function built file output directory',
      defaultConfig.outputDir,
    )
    .action((functionName, options: BuildFaasParams) => {
      if (functionName) {
        logger.log(COMMAND_NAME, `Cloud function name: ${functionName}`);
      }

      buildFunction({ ...options, functionName });
    });
}
