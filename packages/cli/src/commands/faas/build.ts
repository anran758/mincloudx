import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import chalk from 'chalk';

import type { Command } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';

import baseConf from './webpack.base.config';

const COMMAND_NAME = 'build';
const logger = createLogger(COMMAND_NAME);

const defaultConfig = {
  entryDir: './src/function',
  outputDir: './dist',
};

type BuildFaasParams = typeof defaultConfig & {
  functionName?: string;
};

/**
 * 递归地搜索云函数入口文件。
 * @param {string} dir - 要搜索的目录。
 * @param {string} baseDir - 基础目录，用于计算相对路径。
 * @returns {Object} - 入口点对象。
 */

function scanForFunctionEntries(dir, { pick = [] }: { pick?: string[] } = {}) {
  const entries = {};

  function findEntries(currentPath) {
    fs.readdirSync(currentPath).forEach(file => {
      const filePath = path.resolve(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        findEntries(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        const entryKey = path.basename(filePath, path.extname(filePath));

        if (!pick.length || pick.includes(entryKey)) {
          entries[entryKey] = filePath;
        }
      }
    });
  }

  findEntries(dir);

  return entries;
}

export function buildFunction({
  entryDir,
  outputDir,
  functionName,
}: BuildFaasParams = defaultConfig) {
  const folderPath = resolveCwdAbsolutePath(entryDir);

  if (functionName) {
    logger.log(COMMAND_NAME, `Cloud function name: ${functionName}`);
  }

  logger.log(
    COMMAND_NAME,
    `Preparing to collect cloud function source code from ${folderPath} ...\n`,
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
      return;
    }

    // 处理编译过程中的错误
    if (stats?.hasErrors?.()) {
      logger.error(COMMAND_NAME, '构建时遇到错误:');
      logger.error(COMMAND_NAME, stats.toString({ colors: true }));
      return;
    }

    // 构建成功
    logger.info(COMMAND_NAME, stats?.toString?.({ colors: true }), '\n');
    logger.info(COMMAND_NAME, '云函数构建完成：', conf.output?.path, '\n');
  });

  return compiler;
}

export function registerCommand(program: Command) {
  return program
    .command('build [functionName]')
    .description('云函数构建')
    .option(
      '--entry-dir <value>',
      '存放云函数源码目录的路径',
      defaultConfig.entryDir,
    )
    .option(
      '-o, --output-dir <value>',
      '云函数构建文件输出目录',
      defaultConfig.outputDir,
    )
    .action((functionName, options: BuildFaasParams) => {
      buildFunction({ ...options, functionName });
    });
}
