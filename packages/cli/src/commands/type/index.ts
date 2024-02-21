import path from 'path';
import type { Command } from 'commander';
import chalk from 'chalk';

import { createLogger } from '@/utils';

import { generatorSchemaFile } from './generator';
import { generatorSchemaFileFromRemote } from './list';

const COMMAND_NAME = 'type';
const logger = createLogger({ prefix: `[${COMMAND_NAME}]` });

export const DEFAULT_COMMAND_CONFIG = {
  transform: './_schema.json',
  outputPath: './typings',
  outputFile: 'schema',
  pull: false,
};

/**
 * register `type` command
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('生成知晓云数据表的 .d.ts 类型文件')
    .option(
      '--pull',
      '从远端拉取知晓云数据表并生成类型定义',
      DEFAULT_COMMAND_CONFIG.pull,
    )
    .option(
      '--transform <path>',
      '转换本地 JSON 数据表为 TypeScript 类型定义',
      DEFAULT_COMMAND_CONFIG.transform,
    )
    .option(
      '-o, --output-path <path>',
      '类型文件的输出目录',
      DEFAULT_COMMAND_CONFIG.outputPath,
    )
    .option(
      '--output-file <name>',
      '类型文件的文件名',
      DEFAULT_COMMAND_CONFIG.outputFile,
    )
    .action(async (options: typeof DEFAULT_COMMAND_CONFIG) => {
      const cwd = process.cwd();
      const outputConf = {
        outputPath: path.resolve(cwd, options.outputPath),
        outputFile: options.outputFile,
      };

      // 通过读取 schema file 的形式解析
      const result = await (options.pull
        ? generatorSchemaFileFromRemote(outputConf)
        : generatorSchemaFile({
            ...outputConf,
            input: path.resolve(cwd, options.transform),
          }));

      logger.info(
        chalk.green('数据表类型文件保存成功:'),
        path.join(outputConf.outputPath, `${outputConf.outputFile}.d.ts`),
        '\n',
      );

      return result;
    });
}

export default registerCommand;
