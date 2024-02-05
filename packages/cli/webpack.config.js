const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

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
  externals: [
    nodeExternals(),
    // monorepo 结构还需要向上找一层
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules'),
    }),
    // axios-cookiejar-support 的相关依赖
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
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

module.exports = webpackConf;
