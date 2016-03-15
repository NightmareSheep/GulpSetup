var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['bower', 'scripts', 'sass']);

gulp.task('build-Debug', ['default']);
gulp.task('build-Release', ['bower', 'scripts-minified', 'sass']);