import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import styles from './gulp/tasks/styles';
import templates from './gulp/tasks/templates';
import fonts from './gulp/tasks/fonts';
import images from './gulp/tasks/images';
import symbols from './gulp/tasks/symbols';
import watch from './gulp/tasks/watch';
import server from './gulp/tasks/server';
import webpack from './gulp/tasks/webpack';

const build = gulp.series(
  clean,
  gulp.parallel(styles, templates, fonts, webpack),
  images,
  symbols,
);

const dev = gulp.series(build, gulp.parallel(watch, server));

export { build, dev };
