import fs from 'fs';
import path from 'path';

/**
 * 解析给定的文件路径为绝对路径。
 * @desc 如果路径已经是绝对路径，则返回该路径的真实（解析符号链接后的）路径。
 * 如果路径是相对路径，基于当前工作目录解析为绝对路径。
 *
 * @param {string} filePath - 待解析的文件路径。
 * @returns {string} 解析后的绝对文件路径。
 */
export function resolveCwdAbsolutePath(filePath) {
  if (path.isAbsolute(filePath)) {
    return fs.realpathSync(filePath);
  }

  return path.resolve(process.cwd(), filePath);
}

/**
 * 检查给定的文件或目录路径是否存在。
 * @param {string} filePath - 要检查的文件或目录的路径。
 * @returns {boolean} 如果路径存在，则返回 true；否则返回 false。
 */
export function checkPathExists(filePath) {
  const resolvedPath = resolveCwdAbsolutePath(filePath);
  return fs.existsSync(resolvedPath);
}

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
