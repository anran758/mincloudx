import log from 'npmlog';
import type { Command } from 'commander';
import { password } from '@inquirer/prompts';

import config from '@/config';
import { login } from '@/request';
import { output } from '@/utils';

const COMMAND_NAME = 'login';

/**
 * 注册 `login` 命令
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Log in to MinCloud for data access')
    .argument('[clientId]', 'Log in to MinCloud for data access')
    .action(async clientId => {
      try {
        const clientSecret = await password({
          message: 'Please enter your app client secret:',
        });

        const id = clientId || config.client_id;
        if (!id) {
          log.error(
            'login',
            'Client ID not found! please configure or pass the client ID!',
          );
        }

        await login({
          clientId: id,
          clientSecret: clientSecret,
        });

        output('Login successful!');
      } catch (error) {
        log.error(
          'login',
          'Login failed:',
          error instanceof Error ? error.message : error,
        );
      }
    });
}

export default registerCommand;
