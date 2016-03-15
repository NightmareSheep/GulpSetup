var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var config = require('../gulp-config.json');

gulp.task('scripts-minified', function () {
    for (var i = 0; i < config.scriptBundles.length; i++) {
        var scriptBundle = config.scriptBundles[i];

        gulp.src(scriptBundle.files)
            .pipe(sourcemaps.init())
            .pipe(concat(scriptBundle.name))
            .pipe(uglify())
            .pipe(sourcemaps.write("../" + scriptBundle.destination))
            .pipe(gulp.dest(scriptBundle.destination));
    }
});