const paths = require('./paths');
const modules = require('./modules');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { inDev } = require('./webpack.helpers');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getClientEnvironment = require('./env');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);



const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = [
  new webpack.DefinePlugin(env.stringified),
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
  }),
].filter(Boolean);
