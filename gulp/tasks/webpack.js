import webpack from 'webpack';
import logger from 'webpack-stats-logger';
import webpackConfig from '../../webpack.config.babel';

function runWebpack(callback) {
  return webpack(webpackConfig, (error, stats) => {
    logger(error, stats);
    callback();
  });
}

export default runWebpack;
