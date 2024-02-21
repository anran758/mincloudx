import type { Command } from 'commander';

import config from '@/config';
import { login } from '@/request/api/login';

const COMMAND_NAME = 'login';

/**
 * 注册 `login` 命令
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('登录知晓云应用，登录后可获取知晓云相关的数据')
    .argument('<clientSecret>', '知晓云应用的密钥')
    .argument('[clientId]', '知晓云应用的 clint_id, 默认从 rc 文件中读取')
    .action(async (clientId, clientSecret) => {
      console.log('[command/login] login options --> ', clientId, clientSecret);
      const id = clientId || config.client_id;
      if (!id) {
        program.error('未从本地配置中读取到 clint_id, 请配置或传入 clint_id!');
      }

      try {
        await login({
          clientId: id,
          clientSecret: clientSecret,
        });
      } catch (error) {
        // console.log('error', error);

        if (error instanceof Error) {
          program.error(`[command/login] 登录失败: ${error.message}`);
        } else {
          program.error('[command/login] 登录失败，请稍后再试');
        }
      }
    });
}

export default registerCommand;
