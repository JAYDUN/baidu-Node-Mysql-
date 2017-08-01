/**
 * Created by jianshuaz on 2017-07-31.
 */

var gulp= require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

var options = {
    collapseWhitespace:true,
    collapseBooleanAttributes:true,
    removeComments:true,
    removeEmptyAttributes:true,
    removeScriptTypeAttributes:true,
    removeStyleLinkTypeAttributes:true,
    minifyJS:true,
    minifyCSS:true
};
//
// var paths={
//     scripts:['public/js/*.js']
// }
gulp.task('default', function () {
    gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('public/build'));
});

gulp.task('css', function() {
    gulp.src('public/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('public/build'));

});

gulp.task('html', function() {
    gulp.src('public/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('public/build'));

});

gulp.task('default', ['css','html' ]);