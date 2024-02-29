import type { Command } from 'commander';

import { createLogger } from '@/utils';
import { deployFunction } from './deploy';
import { invokeMockData } from './mock';

const COMMAND_NAME = 'debug';
const logger = createLogger(COMMAND_NAME, 'verbose');

// TODO: There are variables here that can be shared.
const defaultConfig = {
  entryDir: './src/function',
  builtDir: './dist',
  outputDir: './log',
  mockDir: './mock',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName?: string;
};

export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Debug a specify cloud function.')
    .argument('[functionName]', 'Cloud function name.')
    .option(
      '--entry-dir <value>',
      'Cloud function source code directory',
      defaultConfig.entryDir,
    )
    .option(
      '--built-dir <value>',
      'Cloud function built file output directory',
      defaultConfig.builtDir,
    )
    .option(
      '--output-dir <value>',
      'log output directory',
      defaultConfig.outputDir,
    )
    .option('--mock-dir <value>', 'mock data directory', defaultConfig.mockDir)
    .action(async (functionName, options: BuildFaasParams) => {
      logger.verbose('verbose', 'function name:', functionName);
      logger.verbose('verbose', 'debug options:', options);
      const name = functionName;
      if (!name) {
        logger.error('debug', 'Please input cloud function name.');
        return;
      }

      const { entryDir, builtDir, outputDir, mockDir } = options;
      // Deploy the selected or provided cloud function with specified directories for entry and build.
      await deployFunction({
        functionName: name,
        entryDir,
        builtDir,
      });

      // Invoke the cloud function with mock data, specifying the mock data directory and the output directory for logs.
      await invokeMockData({
        functionName: name,
        dir: mockDir,
        output: outputDir,
      });
    });
}
