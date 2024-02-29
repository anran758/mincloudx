import type { Command } from 'commander';

import { createLogger, selectCloudFunction } from '@/utils';
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

/**
 * Debug a specify cloud function with options for custom directories.
 *
 * @example
 * select a cloud function to debug
 * ```
 * mincloudx faas debug
 * ```
 *
 * @example
 * Debug a cloud function by name:
 * ```
 * mincloudx faas debug createUser
 * ```
 *
 * @example
 * Debug with custom source and build directories:
 * ```
 * mincloudx faas debug exampl e --entry-dir ./src --built-dir ./build
 * ```
 *
 * @example
 * Debug with custom mock data directory:
 * ```
 * mincloudx faas debug createUser --mock-dir ./mocks
 * ```
 */
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
      const { entryDir, builtDir, outputDir, mockDir } = options;

      let name = functionName;

      // If the cloud function name is not provided, prompt the user to select one from the available functions.
      // This step utilizes a search feature for ease of use.
      if (!name) {
        const answer = await selectCloudFunction(entryDir, {
          message: 'Select a cloud function to debug (supports search)',
        });
        name = answer;
      }

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
