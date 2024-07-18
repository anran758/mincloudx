import TerserPlugin from 'terser-webpack-plugin';
import { optimize } from 'webpack';
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
        test: /\.((j|t)s)$/,
        // using `resolve` to ensure the correct resolution path for 'ts-loader'
        // There are differences between Node.js `require` and webpack's `require`.
        // https://webpack.js.org/api/module-variables/#__non_webpack_require__-webpack-specific
        use: () => {
          /**
           * To avoid affecting the entire package usage due to `ts-loader not being installed in the user's environment,
           * the use property needs to be modified to execute through a function.
           */
          try {
            return __non_webpack_require__.resolve('ts-loader');
          } catch (e) {
            console.error(
              'ts-loader is required but not installed. Please run "npm install ts-loader" to install it.',
            );
            throw e;
          }
        },

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
      new optimize.ModuleConcatenationPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

export default webpackConf;
