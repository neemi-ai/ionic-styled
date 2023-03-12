const paths = require('./paths');
const modules = require('./modules');

const base = {
  resolve:
    {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
      alias: require('./webpack.aliases'),
    }
}

module.exports = (env) => {
  switch (env) {
    case 'dev':
    case 'development':
      return Object.assign(base, require('./webpack.config.dev.js'));
    case 'prod':
    case 'production':
      return Object.assign(base, require('./webpack.config.prod.js'));
    default:
      throw new Error('No matching configuration was found!');
  }
}