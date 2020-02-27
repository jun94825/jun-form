const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'scripts'),
  entry: {
    index: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: './app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
