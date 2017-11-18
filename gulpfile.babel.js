<<<<<<< HEAD
import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import styles from './gulp/tasks/styles';
import templates from './gulp/tasks/templates';
import fonts from './gulp/tasks/fonts';
import images from './gulp/tasks/images';
import symbols from './gulp/tasks/symbols';
import watch from './gulp/tasks/watch';
import server from './gulp/tasks/server';

const build = gulp.series(clean, gulp.parallel(styles, templates, fonts), images, symbols);

const dev = gulp.series(build, gulp.parallel(watch, server));

export { build, dev };
=======
// require('require-dir')('gulpTasks', {recurse: true});
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import precss from 'precss';
import flexbugs from 'postcss-flexbugs-fixes';
import atImport from 'postcss-partial-import';
import cssnext from 'postcss-cssnext';
import normalize from 'postcss-normalize';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import del from 'del';
import newer from 'gulp-newer';


const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';
const clean = () => del('build/');

export function styles() {
  return gulp.src('src/css/app.css')
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(postcss([
      atImport,
      normalize,
      cssnext,
      precss,
      flexbugs,
    ]))
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(gulp.dest('build/'));
}

export function assets() {
  return gulp.src('src/assets/**', { since: gulp.lastRun('assets') })
    .pipe(newer('build/'))
    .pipe(gulp.dest('build/'));
}

export function watch() {
  gulp.watch('src/css/**/*.css', styles);
  gulp.watch('src/assets/**/*.*', assets);
}

const build = gulp.series(clean, gulp.parallel(styles, assets));
const dev = gulp.series(build, watch);

export { build, clean, dev };
export default build;
>>>>>>> b385778... feature(gulp4)
