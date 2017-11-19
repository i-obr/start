import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

function symbols() {
  return gulp.src('src/assets/img/icons/*.svg')
    .pipe(svgmin({
      plugins: [
        { cleanupAttrs: true },
        { cleanupIDs: false },
        { removeDoctype: true },
        { cleanupEnableBackground: true },
        { cleanupNumericValues: true },
        { collapseGroups: true },
        { removeTitle: true },
        { removeEmptyAttrs: true },
        { removeEditorsNSData: true },
        { convertStyleToAttrs: true },
        { collapseGroups: true },
      ],
    }))
    .pipe(svgstore({
      inlineSvg: true,
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('build/img/icons/'));
}

export default symbols;
