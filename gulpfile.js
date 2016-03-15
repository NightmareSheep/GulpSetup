var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['bower', 'scripts', 'styling']);

gulp.task('build-Debug', ['default']);
gulp.task('build-Release', ['bower', 'scripts-minified', 'sass']);