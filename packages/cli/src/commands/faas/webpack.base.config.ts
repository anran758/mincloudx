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
        use: 'ts-loader',
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
