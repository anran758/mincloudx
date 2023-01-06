import path from 'path';
import { Command } from 'commander';

import { packageInfo } from './config';
import { generatorSchemaTs } from './convert-types';

/**
 * https://github.com/tj/commander.js#quick-start
 */
const program = new Command();

// 设置基本信息
program
  .name('mincloud-cli')
  .description(packageInfo.description)
  .version(packageInfo.version);

// 设置可选项
program
  .command('type')
  .description('根据知晓云 schema 生成 TypeScript 类型文件')
  .option('-i, --input <path>', 'schema 数据表 JSON 文件', './_schema.json')
  .option('-o, --output <path>', '生成类型文件后输出的目录', './typings')
  .option('--name <fileName>', '生成后类型文件的文件名', 'schema')
  .action((options) => {
    const cwd = process.cwd();

    // 生成配置
    return generatorSchemaTs({
      input: path.resolve(cwd, options.input),
      output: path.resolve(cwd, options.output),
      fileName: options.name,
    });
  });

program.parse();
