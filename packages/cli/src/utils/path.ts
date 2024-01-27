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
