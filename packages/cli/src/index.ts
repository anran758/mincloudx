import { Command } from 'commander';
import chalk from 'chalk';

import { getConfig, getToken } from './config';
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
  .name('mincloudx')
  .description(packageInfo.description)
  .version(packageInfo.version)
  .option('--envId <envId>', '环境 Id')
  .hook('preAction', (_, actionCommand) => {
    const opts = actionCommand.opts();
    const config = getConfig(opts);

    console.log('');
    console.log(
      chalk.bold(`[mincloudx/${actionCommand.name()}] client_id:`),
      chalk.bold.blue(config.client_id),
      '',
    );

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
