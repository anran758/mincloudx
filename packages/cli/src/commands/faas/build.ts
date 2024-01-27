import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import type { Command } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';

import baseConf from './webpack.base.config';

const logger = createLogger({ prefix: '[build]' });

const defaultConfig = {
  entryPath: './src/function',
  outputPath: './dist',
};

type BuildFaasParams = typeof defaultConfig & {
  a?: string;
};

/**
 * 递归地搜索云函数入口文件。
 * @param {string} dir - 要搜索的目录。
 * @param {string} baseDir - 基础目录，用于计算相对路径。
 * @returns {Object} - 入口点对象。
 */

function scanForFunctionEntries(dir) {
  const entries = {};

  function findEntries(currentPath) {
    fs.readdirSync(currentPath).forEach(file => {
      const filePath = path.resolve(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        findEntries(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        const entryKey = path.basename(filePath, path.extname(filePath));
        entries[entryKey] = filePath;
      }
    });
  }

  findEntries(dir);

  return entries;
}

export function buildFunction({
  entryPath,
  outputPath,
}: BuildFaasParams = defaultConfig) {
  const folderPath = resolveCwdAbsolutePath(entryPath);
  logger.log(`准备从 ${folderPath} 收集云函数源码...\n`);
  const currentConf = {
    entry: scanForFunctionEntries(folderPath),
    output: {
      path: resolveCwdAbsolutePath(outputPath),
    },
  };

  // 后续可以考虑 merge 用户提供的 config
  const conf = merge(baseConf, currentConf);
  const compiler = webpack(conf);

  compiler.run((err, stats) => {
    // 处理构建过程中的错误
    if (err) {
      logger.error('构建时发生错误:', err);
      return;
    }

    // 处理编译过程中的错误
    if (stats?.hasErrors?.()) {
      logger.error('构建时遇到错误:');
      logger.error(stats.toString({ colors: true }));
      return;
    }

    // 构建成功
    logger.info(stats?.toString?.({ colors: true }), '\n');
    logger.info('云函数构建完成：', conf.output?.path, '\n');
  });

  return compiler;
}

export function registerBuildCommand(program: Command) {
  return program
    .command('build')
    .description('云函数构建')
    .option(
      '--entry-path <value>',
      '存放云函数源码目录的路径',
      defaultConfig.entryPath,
    )
    .option(
      '-o, --output-path <value>',
      '云函数构建文件输出目录',
      defaultConfig.outputPath,
    )
    .action((options: any) => {
      buildFunction(options);
    });
}
