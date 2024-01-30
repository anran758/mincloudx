import type { Command } from 'commander';

import { registerCommand as registerBuildCommand } from './build';
import { registerCommand as registerDeployCommand } from './deploy';

export const DEFAULT_COMMAND_CONFIG = {
  build: false,
};

export function registerCommand(program: Command) {
  const faasCommand = program.command('faas').description('云函数常用工具');

  // 注册子命令 (或许可以尝试从自动化导入的方式来简化代码)
  const tasks = [registerBuildCommand, registerDeployCommand];
  tasks.forEach(task => task(faasCommand));

  return faasCommand;
}

export default registerCommand;
