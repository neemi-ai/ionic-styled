const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { inDev } = require('./helpers');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

dotenv.config();
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  module: {
    rules: require('./rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    ...require('./plugins'),
    new ForkTsCheckerWebpackPlugin(),
    inDev() && new webpack.HotModuleReplacementPlugin(),
    inDev() && new ReactRefreshWebpackPlugin(),
    inDev() && new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/assets/images/logo.png',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[name].[chunkhash].chunk.css',
    })
  ],
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    port: process.env.PORT || 8100,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
    alias: require('./aliases'),
  },
  optimization: inDev()
    ? { splitChunks: { chunks: 'all' } }
    : {
      minimize: true,
      sideEffects: true,
      concatenateModules: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 0,
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      }
    },
  performance: {
    hints: false,
  },
};
