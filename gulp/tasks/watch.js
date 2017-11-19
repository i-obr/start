import gulp from 'gulp';
import styles from './styles';
import templates from './templates';
import images from './images';
import symbols from './symbols';

function watch() {
  gulp.watch('src/html/**/*.html', templates);
  gulp.watch('src/css/**/*.css', styles);
  gulp.watch('src/assets/img/*.{png,jpg,gif,svg}', images);
  gulp.watch('src/assets/img/icons/*.svg', symbols);
}

export default watch;
