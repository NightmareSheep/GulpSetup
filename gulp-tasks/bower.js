var gulp = require('gulp');
var filter = require('gulp-filter');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var mainBowerFiles = require('main-bower-files');
var config = require('../config.json');

var jsFilter = filter('**/*.js', { restore: true }),
			cssFilter = filter('**/*.css', { restore: true }),
			scssFilter = filter('**/*.scss', { restore: true }),
			jsDestFile = 'libs.js',
			libsCssDistFile = 'libs-css.scss',
			libsScssDistFile = '_libs-scss.scss';

gulp.task('bower', function() {
    
});