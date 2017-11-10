/**
 * Created by fed on 2017/11/10.
 */
const path = require('path');

module.exports = {
  entry: './app',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: "dist/"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
      {
        test: /\.jpeg/,
        loader: 'file-loader',
      }
    ],
  },
};
