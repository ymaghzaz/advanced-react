const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry:['babel-polyfill','./lib/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};
