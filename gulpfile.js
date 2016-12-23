var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-csso');



//server
gulp.task('start', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            open: true
        }));
});


gulp.task('style', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))

        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', ['style']);
});

//build
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['start', 'watch']);