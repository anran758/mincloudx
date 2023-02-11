import { Command } from 'commander';

import { packageInfo } from './config/constant';
import { registerCommandType } from './commands/type';

/**
 * https://github.com/tj/commander.js#quick-start
 */
const program = new Command();

// 设置基本信息
program
  .name('mincloud-cli')
  .description(packageInfo.description)
  .version(packageInfo.version);

// TypeScript 类型转换
registerCommandType(program);

program.parse();
