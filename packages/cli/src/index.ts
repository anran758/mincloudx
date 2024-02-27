import { program } from 'commander';
import log from 'npmlog';

import { getConfig, getToken } from './config';
import { packageInfo, APP_NAME } from './config/constant';
import { registerMinCloudHeaders } from './request';

import registerCommandType from './commands/type';
import registerCommandLogin from './commands/login';
import registerCommandFaas from './commands/faas';

// 设置基本信息
program
  .name(APP_NAME)
  .description(packageInfo.description)
  .version(packageInfo.version)
  .option('--env-id <id>', 'BaaS environment ID')
  .option('-d, --debug', 'output extra debugging')
  .option('--log-level', 'output log level')
  .hook('preAction', (_, actionCommand) => {
    const globalOptions = program.opts();
    const opts = actionCommand.opts();
    const config = getConfig({ ...globalOptions, ...opts });

    log.info('app', `client_id: ${config.client_id}`);

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
