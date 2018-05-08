const gulp = require("gulp");
const browserSync = require('browser-sync');
const cssMin = require('gulp-csso');
const imageMin = require('gulp-imagemin');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
gulp.task('clean', () => {
    return gulp.src('./app/build', {read: false})
        .pipe(clean());
});

gulp.task('ulify', () => {
    gulp.src('./app/src/main.js')
        .pipe(imageMin())
        .pipe(gulp.dest('./app/build/js'))
});

gulp.task('css', () => {
  gulp.src('./app/src/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('./app/build/css/style'));
});

gulp.task('images', () => {
    gulp.src('./app/src/images/*.png')
        .pipe(imageMin())
        .pipe(gulp.dest('./app/build/images/'))
});

gulp.task('server', () => {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', () => {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css',
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);
gulp.task('build', function(cb) {
    runSequence('clean', ['css', 'images', 'ulify'], cb);
});