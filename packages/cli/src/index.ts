import { program } from 'commander';
import chalk from 'chalk';

import { getConfig, getToken } from './config';
import { packageInfo } from './config/constant';
import { registerMinCloudHeaders } from './request';

import registerCommandType from './commands/type';
import registerCommandLogin from './commands/login';
import registerCommandFaas from './commands/faas';

// 设置基本信息
program
  .name('mincloudx')
  .description(packageInfo.description)
  .version(packageInfo.version)
  .option('--env-id <id>', 'BaaS environment ID')
  .option('-d, --debug', 'output extra debugging')
  .hook('preAction', (_, actionCommand) => {
    const globalOptions = program.opts();
    const opts = actionCommand.opts();
    const config = getConfig({ ...globalOptions, ...opts });

    console.log(
      chalk.bold(`[mincloudx] client_id:`),
      chalk.bold.blue(config.client_id),
    );

    // 知晓云请求需要附带对应的请求头
    registerMinCloudHeaders({
      token: getToken(),
      envId: globalOptions.envId,
    });
  });

// 注册对应的 command
registerCommandType(program);
registerCommandLogin(program);
registerCommandFaas(program);

program.parse(process.argv);
