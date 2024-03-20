import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { AxiosError } from 'axios';
import { readFile } from 'fs/promises';

import type { Command } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';
import { createCloudFunction, updateCloudFunction } from '@/request/api';

const COMMAND_NAME = 'upload';
const logger = createLogger(COMMAND_NAME);
const defaultConfig = {
  builtDir: './dist',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName?: string;
};

async function uploadFile({
  dir,
  functionName,
}: {
  dir: string;
  functionName: string;
}) {
  const filePath = path.resolve(dir, `${functionName}.js`);
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `"${functionName}" does not exist, please check if the corresponding file exists in the deployment directory.\n` +
        filePath,
    );
  }

  const content = await readFile(filePath);

  try {
    await updateCloudFunction({
      name: functionName,
      content: content.toString(),
    });

    logger.success(
      COMMAND_NAME,
      `"${chalk.bold.blue(functionName)}" uploaded successfully.`,
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, statusText } = error.response || {};
      logger.verbose(
        COMMAND_NAME,
        `Update of cloud function failed. HTTP status: ${status}, statusText: ${statusText}.`,
      );

      if (status === 404) {
        logger.info(
          COMMAND_NAME,
          `Trying to create new cloud function "${functionName}".`,
        );

        await createCloudFunction({
          name: functionName,
          content: content.toString(),
        }).catch((err: AxiosError) => {
          const message = `"${chalk.bold.blue(
            functionName,
          )}" create failed, see details: ${err.message}`;
          logger.HTTP(
            COMMAND_NAME,
            `Create of cloud function failed. HTTP status: ${err.response?.status}, statusText: ${err.response?.statusText}.`,
          );

          throw new Error(message);
        });

        logger.info(
          COMMAND_NAME,
          `"${chalk.bold.blue(functionName)}" created successfully.`,
        );
      }
    } else {
      logger.verbose(
        COMMAND_NAME,
        `update cloud function error, see details:`,
        error,
      );
    }
  }
}

export async function uploadFunction({
  builtDir,
  functionName,
}: BuildFaasParams = defaultConfig) {
  const folderPath = resolveCwdAbsolutePath(builtDir);
  logger.log(COMMAND_NAME, `Deployment directory: ${folderPath}`);

  if (functionName) {
    logger.log(COMMAND_NAME, `Cloud Function:`, chalk.bold.blue(functionName));
    const result = await uploadFile({ dir: folderPath, functionName });

    return result;
  } else {
    logger.log(
      COMMAND_NAME,
      `Preparing to deploy`,
      chalk.bold('all cloud functions'),
      `from the directory...\n`,
    );

    const extension = '.js';
    const files = fs
      .readdirSync(folderPath)
      .filter(file => path.extname(file) === extension);

    return Promise.all(
      files.map(file => {
        const functionName = path.basename(file, extension);

        return uploadFile({ dir: folderPath, functionName });
      }),
    );
  }
}

/**
 * Uploads the built cloud function to the cloud environment.
 *
 * @example
 * Upload all cloud functions from the default build directory (`./dist`):
 *
 * ```bash
 * mincloudx faas upload
 * ```
 *
 * @example
 * Upload a specific cloud function named "example" from the default build directory:
 *
 * ```bash
 * mincloudx faas upload createUser
 * ```
 *
 * @example
 * Upload a specific cloud function named "example" from a custom build directory (`./dist-ts`):
 *
 * ```bash
 * mincloudx faas upload createUser --built-dir ./dist-ts
 * ```
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Upload the built package of the cloud functions.')
    .argument('[functionName]', 'Cloud function name.')
    .option(
      '--built-dir <value>',
      'Built directory (usually the directory after source code compilation).',
      defaultConfig.builtDir,
    )
    .action(async (functionName, options: BuildFaasParams) => {
      try {
        await uploadFunction({
          builtDir: options.builtDir,
          functionName,
        });
      } catch (error) {
        logger.error(
          COMMAND_NAME,
          error instanceof Error ? error.message : error,
        );
      }
    });
}
