var config = require('../config.json');
var watch = require('gulp-watch');
var gulp = require('gulp');


gulp.task('watch-styling', function () {
    var styling = [];
    for (var i = 0; i < config.styleBundles.length; i++) {
        var styleBundle = config.styleBundles[i];
        styling.concat(styleBundle.files);
    }

    watch(styling, function () {
        gulp.start('styling');
    });
});

gulp.task('watch-scripts', function () {
    var scripts = [];
    for (var i = 0; i < config.scriptBundles.length; i++) {
        var scriptBundle = config.scriptBundles[i];
        scripts = scripts.concat(scriptBundle.files);
    }
    console.log(scripts);
    watch(scripts, function () {
        gulp.start('scripts');
    });
});

gulp.task('watch', ['watch-scripts', 'watch-styling']);