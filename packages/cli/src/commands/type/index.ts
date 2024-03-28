import path from 'path';
import type { Command } from 'commander';

import { createLogger } from '@/utils';

import { generatorSchemaFile } from './generator';
import { generatorSchemaFileFromRemote } from './list';

const COMMAND_NAME = 'type';
const logger = createLogger(COMMAND_NAME);

export const DEFAULT_COMMAND_CONFIG = {
  transform: './_schema.json',
  outputDir: './types',
  outputFile: 'schema',
  pull: true,
};

/**
 * register `type` command
 *
 * @example
 *
 * ```
 * mincloudx type
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --pull
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --transform ./_schema.json
 * ```
 *
 * @example
 *
 * ```
 * mincloudx type --pull --output-dir ./dist --output-file index
 * ```
 */
export function registerCommand(program: Command) {
  return program
    .command(COMMAND_NAME)
    .description('generate .d.ts type files for LeanCloud data tables')
    .option(
      '-p, --pull',
      'pull MinCloud data tables from remote and generate type definitions.',
      DEFAULT_COMMAND_CONFIG.pull,
    )
    .option(
      '-t, --transform <path>',
      'transform local JSON data tables to TypeScript type definitions.',
    )
    .option(
      '-o, --output-dir <path>',
      'TypeScript type file output directory.',
      DEFAULT_COMMAND_CONFIG.outputDir,
    )
    .option(
      '--output-file <name>',
      'name of the type file.',
      DEFAULT_COMMAND_CONFIG.outputFile,
    )

    .action(async (options: typeof DEFAULT_COMMAND_CONFIG) => {
      const cwd = process.cwd();
      const outputConf = {
        outputDir: path.resolve(cwd, options.outputDir),
        outputFile: options.outputFile,
      };

      try {
        if (options.pull) {
          logger.notice(
            COMMAND_NAME,
            'preparing to fetch data table structure information from remote.',
          );
          await generatorSchemaFileFromRemote(outputConf);
        } else {
          await generatorSchemaFile({
            ...outputConf,
            input: path.resolve(cwd, options.transform),
          });
        }
      } catch (error) {
        logger.error(
          COMMAND_NAME,
          error instanceof Error
            ? error.message
            : 'The generation of data table type files failed.',
        );

        return;
      }

      logger.success(
        COMMAND_NAME,
        'Generation of type file was successful. Saved at:',

        path.join(outputConf.outputDir, `${outputConf.outputFile}.d.ts`),
      );
    });
}

export default registerCommand;
