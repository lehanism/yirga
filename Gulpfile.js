const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

gulp.task('build:css', () => {
    gulp.src('src/**/*.css')
        .pipe(concat('main.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css/'));
});