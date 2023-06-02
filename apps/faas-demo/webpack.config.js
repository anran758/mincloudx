// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const glob = require('glob');
const { keyBy } = require('lodash');

const isProduction = process.env.NODE_ENV == 'production';

/**
 * 从 ./src 目录读取所有云函数 js 文件生成 webpack entry 参数对象
 * => {
 *   funcA: '/path/to/src/funcA.js',
 *   funcB: '/path/to/src/funcB.js',
 *   ...
 * }
 * @return {Object}
 */
function buildEntries(srcDir) {
  const jsFileExt = '.js';
  const pathPattern = srcDir ? `./src/${srcDir}/*?(.js)` : `./src/*/*?(.js)`;
  const filePaths = glob.sync(pathPattern).filter(fileName => {
    const isDir = !path.basename(fileName).includes('.');
    const isJsFile = !isDir && fileName.endsWith(jsFileExt);
    return isDir || isJsFile;
  });
  return keyBy(filePaths, filePath => path.basename(filePath, jsFileExt));
}

const config = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      // 导出方式为 export default xxx
      name: 'main',
      type: 'commonjs-module',
      export: 'default',

      // 使用 export function main() {}
      // type: 'commonjs-module',

      // name: 'exports.main',
      // type: 'assign',
      // type: 'umd',
    },
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = (env, argv) => {
  config.entry = buildEntries(argv.src);

  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }

  return config;
};
