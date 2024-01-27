import type { Command } from 'commander';

import { registerBuildCommand } from './build';

export const DEFAULT_COMMAND_CONFIG = {
  build: false,
};

export function registerCommand(program: Command) {
  const faasCommand = program.command('faas').description('云函数常用工具');

  // 注册子命令
  const tasks = [registerBuildCommand];
  tasks.forEach(task => task(faasCommand));

  return faasCommand;
}

export default registerCommand;
