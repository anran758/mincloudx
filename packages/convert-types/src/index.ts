import path from 'path';
import { Command } from 'commander';

import {packageInfo} from './config';
import { generatorSchemaTs } from './convert-types';

const program = new Command();

// 设置基本信息
program
  .name('convert-types')
  .description(packageInfo.description)
  .version(packageInfo.version);

// 设置可选项
program
  .option('-o, --output <path>', 'output path', './typings')
  .option('-i, --input <path>', 'input path', './_schema.json')
  .option('--name <name>', 'output filename', 'schema')
  .parse();

const options = program.opts();
const cwd = process.cwd();

// 生成配置
generatorSchemaTs({
  input: path.resolve(cwd, options.input),
  output: path.resolve(cwd, options.output),
  fileName: options.name,
});
