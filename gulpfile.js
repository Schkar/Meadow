var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({errLogToConsole: true,
                  outputStyle: 'expanded'}))
          .pipe(sourcemaps.write())
          .pipe(postcss([ autoprefixer() ]))
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default',['sass', 'watch']);
