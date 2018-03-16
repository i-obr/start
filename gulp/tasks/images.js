import gulp from 'gulp';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';

function images() {
  return gulp
    .src('src/assets/img/*.{png,jpg,gif,svg}')
    .pipe(newer('build/'))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 4 }),
        imagemin.svgo({
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
        }),
      ]),
    )
    .pipe(gulp.dest('build/img'));
}

export default images;
