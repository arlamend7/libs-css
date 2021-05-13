var gulp = require('gulp');
var Fiber = require('fibers');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassFiles = './sass/**/*.s[ac]ss',
    cssDest = './css/';

gulp.task('sass', () => 
  gulp.src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({fiber: Fiber,indentWidth:2}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(cssDest))
)

gulp.task('watch', function() {
  gulp.watch(sassFiles,gulp.series('sass'));
})