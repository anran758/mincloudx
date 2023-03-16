import { Command } from 'commander';

import { getToken } from './config';
import { packageInfo } from './config/constant';
import { registerMinCloudHeaders } from './request';

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
  .version(packageInfo.version)
  .option('--envId <envId>', '环境 Id')
  .hook('preAction', (thisCommand, actionCommand) => {
    // 知晓云请求需要附带对应的请求头
    registerMinCloudHeaders({
      token: getToken(),
      envId: actionCommand.opts().envId,
    });
  });

// 注册对应的 command
registerCommandType(program);
registerCommandLogin(program);

program.parse();
