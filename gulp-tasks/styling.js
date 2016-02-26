var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.json');

gulp.task('sass', function () {
    for (var i = 0; i < config.styleBundles.length; i++) {
        var styleBundle = config.styleBundles[i];
        gulp.src(styleBundle.files)
            .pipe(sourcemaps.init())
            .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
            .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
            .pipe(concat(styleBundle.name))
            .pipe(minifyCss())
            .pipe(sourcemaps.write("../" + styleBundle.destination))
            .pipe(gulp.dest(styleBundle.destination));
    }
});