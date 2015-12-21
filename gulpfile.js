var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('default', function() {
    gulp.run(['scripts', 'styles']);
});


gulp.task('scripts', function() {
    return gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap.min.js',
        './app/**/*.js'
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        ;
});

gulp.task('styles', function() {
    return gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './css/**/*.css'
    ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css/'))
    ;
});

gulp.task('watch', function() {
    watch(['./app/**/*.js', './css/**/*.css'], function() {
        gulp.run('default');
    });
})