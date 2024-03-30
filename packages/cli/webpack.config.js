const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const webpackConf = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
  },
  target: 'node',
  cache: { type: 'filesystem' },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/,
      },
    ],
  },
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals({
      allowlist: ['inquirer-autocomplete-standalone'],
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules'),
    }),
    { deasync: 'commonjs deasync' },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
    fallback: { path: false },
  },
  optimization: {
    minimizer: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assist'), // 源目录的绝对路径
            to: path.resolve(__dirname, 'lib/assist'), // 目标目录的绝对路径
          },
        ],
      }),
    ],
  },
};

module.exports = webpackConf;
