import path from 'path';
import type { Command } from 'commander';

import { createLogger } from '@/utils';

import { generatorSchemaFile } from './generator';
import { generatorSchemaFileFromRemote } from './list';

const COMMAND_NAME = 'type';
const logger = createLogger(COMMAND_NAME);

export const DEFAULT_COMMAND_CONFIG = {
  transform: './_schema.json',
  outputDir: './types',
  outputFile: 'schema',
  pull: false,
};

/**
 * register `type` command
 *
 * @example
 *
 * ```
 * mincloudx type
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --pull
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --transform ./_schema.json
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --pull --output-dir ./dist --output-file index
 * ```
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('生成知晓云数据表的 .d.ts 类型文件')
    .option(
      '-p, --pull',
      '从远端拉取知晓云数据表并生成类型定义',
      DEFAULT_COMMAND_CONFIG.pull,
    )
    .option(
      '-t, --transform <path>',
      '转换本地 JSON 数据表为 TypeScript 类型定义',
      DEFAULT_COMMAND_CONFIG.transform,
    )
    .option(
      '-o, --output-dir <path>',
      'typescript type file output directory',
      DEFAULT_COMMAND_CONFIG.outputDir,
    )
    .option(
      '--output-file <name>',
      '类型文件的文件名',
      DEFAULT_COMMAND_CONFIG.outputFile,
    )
    .action(async (options: typeof DEFAULT_COMMAND_CONFIG) => {
      const cwd = process.cwd();
      const outputConf = {
        outputDir: path.resolve(cwd, options.outputDir),
        outputFile: options.outputFile,
      };

      if (options.pull) {
        try {
          await generatorSchemaFileFromRemote(outputConf);
        } catch (error) {
          logger.error(
            COMMAND_NAME,
            error instanceof Error ? error.message : '获取数据表列表失败',
          );

          return;
        }
      } else {
        try {
          await generatorSchemaFile({
            ...outputConf,
            input: path.resolve(cwd, options.transform),
          });
        } catch (error) {
          logger.error(
            COMMAND_NAME,
            error instanceof Error ? error.message : '生成类型文件失败',
          );

          logger.verbose(COMMAND_NAME, '生成类型文件失败:', error);
          return;
        }
      }

      logger.verbose(COMMAND_NAME, '测试');

      logger.success(
        COMMAND_NAME,
        '数据表类型文件保存成功:',
        path.join(outputConf.outputDir, `${outputConf.outputFile}.d.ts`),
      );
    });
}

export default registerCommand;
