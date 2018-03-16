/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
/* eslint-env es6 */

import gulp from 'gulp';
import njkRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import prettify from 'gulp-prettify';
import frontMatter from 'gulp-front-matter';
import errorHandler from '../util/errorHandler';

function templates() {
  return gulp
    .src('src/html/**/[^_]*.html')
    .pipe(
      plumber({
        errorHandler: errorHandler, // eslint-disable-line
      }),
    )
    .pipe(frontMatter({ property: 'data' }))
    .pipe(
      njkRender({
        path: ['src/html/'],
      }),
    )
    .pipe(
      prettify({
        indent_size: 2,
        wrap_attributes: 'auto',
        preserve_newlines: false,
        end_with_newline: true,
      }),
    )
    .pipe(gulp.dest('build/'));
}

export default templates;
