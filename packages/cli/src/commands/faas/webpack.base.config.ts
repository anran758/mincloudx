import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';

import { resolveCwdAbsolutePath } from '@/utils';

/**
 * @desc 针对云函数环境的基础构建配置
 */
const webpackConf: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].js',
    clean: true,
    library: {
      name: 'exports.main',
      export: 'default',
      type: 'assign',
    },
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        // using `resolve` to ensure the correct resolution path for 'ts-loader'
        // There are differences between Node.js `require` and webpack's `require`.
        // https://webpack.js.org/api/module-variables/#__non_webpack_require__-webpack-specific
        use: __non_webpack_require__.resolve('ts-loader'),
        exclude: /node_modules/,
      },
    ],
  },
  externalsPresets: {
    node: true,
  },
  resolve: {
    alias: {
      '@': resolveCwdAbsolutePath('src'),
    },
    extensions: ['.ts', '.js'],
    fallback: { path: false },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

export default webpackConf;
