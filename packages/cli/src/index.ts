import { Command } from 'commander';

import { packageInfo } from './config/constant';

import registerCommandType from './commands/type';
import registerCommandLogin from './commands/login';

/**
 * https://github.com/tj/commander.js#quick-start
 */
const program = new Command();

// 设置基本信息
program
  .name('min-cloud')
  .description(packageInfo.description)
  .version(packageInfo.version);

// 注册对应的 command
registerCommandType(program);
registerCommandLogin(program);

program.parse();
