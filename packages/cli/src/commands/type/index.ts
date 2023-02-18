import path from 'path';
import { generatorSchemaTs } from './template';
import type { Command } from 'commander';
import { generatorSchemaTsFromMincloud } from './list';

export const DEFAULT_COMMAND_CONFIG = {
  schemaFile: './_schema.json',
  outputDir: './typings',
  outputFileName: 'schema',
  fromMinCloud: false,
};

/**
 * register `type` command
 */
export function registerCommand(program: Command) {
  return program
    .command('type')
    .description('生成知晓云数据表的 .d.ts 类型文件')
    .option(
      '--fromMinCloud',
      '通过读取线上的知晓云数据表信息来转换类型文件',
      DEFAULT_COMMAND_CONFIG.fromMinCloud
    )
    .option(
      '-f, --schemaFile <path>',
      '解析本地的 JSON 数据表文件来转换 TypeScript',
      DEFAULT_COMMAND_CONFIG.schemaFile
    )
    .option(
      '--outputDir, <path>',
      '类型文件的输出目录',
      DEFAULT_COMMAND_CONFIG.outputDir
    )
    .option(
      '--outputFileName <fileName>',
      '类型文件的文件名',
      DEFAULT_COMMAND_CONFIG.outputFileName
    )
    .action(async (options: typeof DEFAULT_COMMAND_CONFIG) => {
      const cwd = process.cwd();
      const outputConf = {
        outputDir: path.resolve(cwd, options.outputDir),
        outputFileName: options.outputFileName,
      };

      // 通过读取 schema file 的形式解析
      return !options.fromMinCloud
        ? generatorSchemaTs({
            ...outputConf,
            input: path.resolve(cwd, options.schemaFile),
          })
        : generatorSchemaTsFromMincloud(outputConf);
    });
}

export default registerCommand;
