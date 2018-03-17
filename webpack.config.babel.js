import path from 'path';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'index.js',
  },

  watch: !isProduction,

  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool:
    isProduction !== 'production' ? 'cheap-inline-module-source-map' : null,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [],
};

if (isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]);
}

export default config;
