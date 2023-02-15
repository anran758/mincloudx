import type { Command } from 'commander';

import config from '../../config';
import { login } from '../../request/api/login';

/**
 * 注册 `login` 命令
 *
 * TODO:
 *   当前实现会在命令行中留痕，是一种简单的实现。后续可以换一种更加安全的方式读取 clientSecret。
 *   如 login 后隐藏 clientSecret 的输入，而不是从 argument 中读取
 */
export function registerCommand(program: Command) {
  return program
    .command('login')
    .description('登录知晓云应用，登录后可获取知晓云相关的数据')
    .argument('<clientSecret>', '知晓云应用的密钥')
    .argument('[clientId]', '知晓云应用的 clint_id, 默认从 rc 文件中读取')
    .action(async (clientSecret, clientId) => {
      console.log('[registerCommand] login --> ', clientSecret, clientId);
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
        if (error instanceof Error) {
          program.error(`登录失败: ${error.message}`);
        } else {
          program.error('登录失败，请稍后再试');
        }
      }
    });
}

export default registerCommand;
