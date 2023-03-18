const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin(Object.keys(process.env).reduce((accum, key) => {
    return {...accum, [`process.env.${key}`]: JSON.stringify(process.env[key]) };
  }, {})),
];