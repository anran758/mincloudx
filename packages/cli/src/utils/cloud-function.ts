import fs from 'fs';
import path from 'path';
import autocomplete, { Separator } from 'inquirer-autocomplete-standalone';

import { resolveCwdAbsolutePath } from '@/utils';

/**
 * 递归地搜索云函数入口文件。
 * @param {string} dir - 要搜索的目录。
 * @param {string} baseDir - 基础目录，用于计算相对路径。
 * @returns {Object} - 入口点对象。
 */

export function scanForFunctionEntries(
  dir,
  { pick = [] }: { pick?: string[] } = {},
) {
  const entries = {};

  function findEntries(currentPath) {
    fs.readdirSync(currentPath).forEach(file => {
      const filePath = path.resolve(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        findEntries(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        const entryKey = path.basename(filePath, path.extname(filePath));

        if (!pick.length || pick.includes(entryKey)) {
          entries[entryKey] = filePath;
        }
      }
    });
  }

  findEntries(dir);

  return entries;
}

export async function selectCloudFunction(
  entryDir: string,
  { message = 'Select a cloud function' } = {},
) {
  const folderPath = resolveCwdAbsolutePath(entryDir);
  const entry = scanForFunctionEntries(folderPath);
  const functionNames = Object.keys(entry);

  return autocomplete({
    message,
    source: (input = '') => {
      return new Promise(resolve => {
        const results = functionNames.filter(s =>
          s.toLowerCase().includes(input.toLowerCase()),
        );
        const all: any = results.map(r => ({
          value: r,
          name: r,
          // description: r,
          disabled: false,
        }));
        all.unshift(new Separator());
        resolve(all);
      });
    },
    transformer: input => {
      return `Cloud function: ${input}`;
    },
    default: '',
    pageSize: 10,
    validate(value) {
      if (!value) {
        return 'Please select a cloud function';
      }
      return true;
    },
  });
}
