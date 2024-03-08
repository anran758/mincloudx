import { program } from 'commander';
import log from 'npmlog';

import { getConfig, getToken } from '@/config';
import { packageInfo, APP_NAME } from '@/config/constant';
import { registerMinCloudHeaders } from '@/request';
import { initLogger } from '@/utils';

import registerCommandType from './type';
import registerCommandLogin from './login';
import registerCommandFaas from './faas';

// 设置基本信息

export function registerCommand(argv = process.argv) {
  program
    .name(APP_NAME)
    .description(packageInfo.description)
    .version(packageInfo.version)
    .option('--env-id <id>', 'BaaS environment ID')
    .option('-v, --verbose', 'output extra debugging')
    .option('--log-level', 'output log level')
    .hook('preAction', (_, actionCommand) => {
      const globalOptions = program.opts();
      const opts = actionCommand.opts();
      const config = getConfig({ ...globalOptions, ...opts });
      const { envId, verbose, logLevel } = globalOptions;

      // output MinCloud info
      log.info('app', `Client ID: ${config.client_id}`);
      if (envId) log.info('app', `Environment ID: ${envId}`);
      console.log('');

      initLogger(logLevel || verbose ? 'verbose' : '');

      // 知晓云请求需要附带对应的请求头
      registerMinCloudHeaders({
        token: getToken(),
        envId,
      });
    });

  // 注册对应的 command
  registerCommandType(program);
  registerCommandLogin(program);
  registerCommandFaas(program);

  program.parse(argv);
}
