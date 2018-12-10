import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import imagemin from 'gulp-imagemin'

const paths = {
  styles: {
    src: 'src/styles/*.scss',
    dest: 'app/assets/styles/'
  },
  scripts: {
    src: 'src/scripts/*.js',
    dest: 'app/assets/scripts/'
  },
  images: {
    src: 'src/images/*',
    dest: 'app/assets/images'
  }
};

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
}

export function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(gulp.parallel(styles, scripts, images));
gulp.task('build', build);


export default build;
