/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
/* eslint-env es6 */

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import precss from 'precss';
import flexbugs from 'postcss-flexbugs-fixes';
import atImport from 'postcss-partial-import';
import cssnext from 'postcss-cssnext';
import normalize from 'postcss-normalize';
import fontMagic from 'postcss-font-magician';
import cssnano from 'gulp-cssnano';
import mqpacker from 'css-mqpacker';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import errorHandler from '../util/errorHandler';
import isDev from '../config';

function styles() {
  return gulp.src('src/css/app.css')
    .pipe(plumber({
      errorHandler: errorHandler,  // eslint-disable-line
    }))
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(postcss([
      atImport,
      normalize,
      cssnext,
      precss,
      mqpacker({
        sort: true,
      }),
      fontMagic({
        formats: 'woff2 woff',
      }),
      flexbugs,
    ]))
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(gulpif(!isDev, cssnano()))
    .pipe(gulp.dest('build/css'));
}

export default styles;
