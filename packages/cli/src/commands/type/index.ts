import path from 'path';
import { generatorSchemaTs } from './template';
import type { Command } from 'commander';

export const DEFAULT_COMMAND_CONFIG = {
  input: './_schema.json',
  outputDir: './typings',
  fileName: 'schema',
};

/**
 * register `type` command
 */
export function registerCommandType(program: Command) {
  return program
    .command('type')
    .description('根据知晓云 schema 生成 TypeScript 类型文件')
    .option(
      '-i, --input <path>',
      '通过本地的 schema 数据表 JSON 文件来转换 TypeScript',
      DEFAULT_COMMAND_CONFIG.input
    )
    .option(
      '--output-dir, <path>',
      '生成类型文件后输出的目录',
      DEFAULT_COMMAND_CONFIG.outputDir
    )
    .option(
      '--file-name <fileName>',
      '生成类型文件后的文件名',
      DEFAULT_COMMAND_CONFIG.fileName
    )
    .action((options: typeof DEFAULT_COMMAND_CONFIG) => {
      const cwd = process.cwd();

      // 生成配置
      return generatorSchemaTs({
        input: path.resolve(cwd, options.input),
        outputDir: path.resolve(cwd, options.outputDir),
        fileName: options.fileName,
      });
    });
}

export default registerCommandType;
