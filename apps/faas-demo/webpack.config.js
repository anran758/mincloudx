const fs = require('fs');
const path = require('path');
const Config = require('webpack-chain');

const config = new Config();

/**
 * 递归地搜索云函数入口文件。
 * @param {string} dir - 要搜索的目录。
 * @param {string} baseDir - 基础目录，用于计算相对路径。
 * @returns {Object} - 入口点对象。
 */

function scanForFunctionEntries(dir) {
  let entries = {};

  function findEntries(currentPath) {
    fs.readdirSync(currentPath).forEach(file => {
      const filePath = path.resolve(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        findEntries(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        const entryKey = path.basename(filePath, path.extname(filePath));
        entries[entryKey] = filePath;
      }
    });
  }

  findEntries(dir);

  return entries;
}

// 输入
const functionEntries = scanForFunctionEntries('./src/function');
Object.keys(functionEntries).forEach(entryName => {
  config.entry(entryName).add(functionEntries[entryName]).end();
});

// 输出
config.output
  .path(path.resolve(__dirname, 'dist'))
  .filename('[name].js')
  // .libraryTarget('commonjs2');
  .library('exports.main')
  .libraryTarget('assign')
  .libraryExport('default');

// 别名
config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

// 环境
config.target('node');
config.module
  .rule('typescript')
  .test(/\.ts$/)
  .use('ts-loader')
  .loader('ts-loader')
  .end()
  .end();

config.resolve.extensions.add('.ts').add('.js').end();
config.resolve.fallback = { path: false };

module.exports = config.toConfig();
