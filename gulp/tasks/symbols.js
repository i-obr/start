import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import inject from 'gulp-inject';

const fileContents = (filePath, file) => file.contents.toString();

function symbols() {
  const svgSymbols = gulp
    .src('src/assets/img/icons/*.svg')
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
    .pipe(svgstore({ inlineSvg: true }));

  return gulp
    .src('build/*.html')
    .pipe(inject(svgSymbols, { transform: fileContents }))
    .pipe(gulp.dest('build/'));
}

export default symbols;
