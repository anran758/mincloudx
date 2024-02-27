import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { AxiosError } from 'axios';
import { readFile } from 'fs/promises';
import { program as globalProgram } from 'commander';

import type { Command } from 'commander';

import { createLogger, resolveCwdAbsolutePath } from '@/utils';
import { createCloudFunction, updateCloudFunction } from '@/request/api';

const COMMAND_NAME = 'deploy';
const logger = createLogger(COMMAND_NAME);
const defaultConfig = {
  deployDir: './dist',
};

type BuildFaasParams = typeof defaultConfig & {
  /**
   * 云函数名
   */
  functionName?: string;
};

async function deployFile({
  dir,
  functionName,
}: {
  dir: string;
  functionName: string;
}) {
  const { debug } = globalProgram.opts();
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
      if (debug) {
        logger.log(
          COMMAND_NAME,
          `Update of cloud function failed. HTTP status: ${status}, statusText: ${statusText}.`,
        );
      }

      if (status === 404) {
        if (debug) {
          logger.log(
            COMMAND_NAME,
            `"${functionName}" try create new function.`,
          );
        }

        await createCloudFunction({
          name: functionName,
          content: content.toString(),
        }).catch((err: AxiosError) => {
          const message = `"${chalk.bold.blue(
            functionName,
          )}" create failed, see details: ${err.message}`;
          if (debug) {
            logger.log(
              COMMAND_NAME,
              `${chalk.bold('Create')} of cloud function failed. HTTP status: ${
                err.response?.status
              }, statusText: ${err.response?.statusText}.`,
            );
          }

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

export async function deployFunction({
  deployDir,
  functionName,
}: BuildFaasParams = defaultConfig) {
  const folderPath = resolveCwdAbsolutePath(deployDir);
  logger.log(COMMAND_NAME, `Deployment directory: ${folderPath}`);

  if (functionName) {
    logger.log(COMMAND_NAME, `Cloud Function:`, chalk.bold.blue(functionName));
    const result = await deployFile({ dir: folderPath, functionName });

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

        return deployFile({ dir: folderPath, functionName });
      }),
    );
  }
}

export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('Deploy the built package of the cloud functions.')
    .argument('<functionName>', 'Cloud function name.')
    .option(
      '--deploy-dir <value>',
      'Deployment directory (usually the directory after source code compilation).',
      defaultConfig.deployDir,
    )
    .action(async (functionName, options: BuildFaasParams) => {
      try {
        await deployFunction({
          ...options,
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
