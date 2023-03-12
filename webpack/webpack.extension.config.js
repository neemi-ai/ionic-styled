const chrome = require('../extension/webpack/chrome');
const firefox = require('../extension/webpack/firefox');
const safari = require('../extension/webpack/safari');
const paths = require('./paths')

module.exports = [
  chrome,
  firefox,
  safari
];
