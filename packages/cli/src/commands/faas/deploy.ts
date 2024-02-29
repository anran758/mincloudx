import type { Command } from 'commander';

import { createLogger } from '@/utils';

import { buildFunction } from './build';
import { uploadFunction } from './upload';

const COMMAND_NAME = 'deploy';
const logger = createLogger(COMMAND_NAME);
const defaultConfig = {
  entryDir: './src/function',
  builtDir: './dist',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName?: string;
};

export async function deployFunction({
  entryDir,
  builtDir,
  functionName,
}: BuildFaasParams) {
  // It first builds the cloud function by compiling the source code
  // located in `entryDir` and outputs the built files to `builtDir`.
  await buildFunction({
    functionName,
    entryDir,
    outputDir: builtDir,
  });

  // After the build process is successfully completed,
  // it uploads the built cloud function to the cloud,
  // making it available for execution.
  await uploadFunction({ builtDir, functionName });

  logger.success(COMMAND_NAME, 'cloud function deploy completed.');
}

export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Deploy the built package of the cloud functions.')
    .argument('[functionName]', 'Cloud function name.')
    .option(
      '--entry-dir <value>',
      'Cloud function source code directory',
      defaultConfig.entryDir,
    )
    .option(
      '--built-dir <value>',
      'Built directory (usually the directory after source code compilation).',
      defaultConfig.builtDir,
    )
    .action(async (functionName, options: BuildFaasParams) => {
      const { entryDir, builtDir } = options;

      try {
        await deployFunction({ functionName, entryDir, builtDir });
      } catch (error) {
        logger.error(
          COMMAND_NAME,
          error instanceof Error ? error.message : error,
        );
      }
    });
}
