import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

function deploy() {
  return gulp.src('./build/**/*').pipe(ghPages());
}

export default deploy;
