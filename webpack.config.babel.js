import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'index.js',
  },
  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
