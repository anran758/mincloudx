const fs = require('fs');
const path = require('path');
const Config = require('webpack-chain');
const TerserPlugin = require('terser-webpack-plugin');

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
  // 将库的导出赋值给一个名为 exports.main 的全局变量。
  .library('exports.main')
  // 设置库的输出，设置 assign 会直接将库的导出赋值给由 library 指定的全局变量
  .libraryTarget('assign')
  // 只导出模块的默认导出部分
  .libraryExport('default');

config.target('node');
config.module
  .rule('typescript')
  .test(/\.ts$/)
  .use('ts-loader')
  .loader('ts-loader')
  .end();

config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
config.resolve.extensions.add('.ts').add('.js').end();

config.optimization.minimizer('terser').use(TerserPlugin, [
  {
    extractComments: false,
  },
]);

const webpackConfig = config.toConfig();

// webpack-chain 目前不支持部分 webpack 5 的写法
webpackConfig.output.clean = true;
webpackConfig.resolve.fallback = { path: false };

module.exports = webpackConfig;
