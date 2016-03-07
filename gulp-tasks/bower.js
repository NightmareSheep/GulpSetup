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
    scssAndCssFilter = filter(['**/*.scss', '**/*.css'], { restore: true });

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
		.pipe(jsFilter)
		    .pipe(concat(config.bower.scripts.name))
		    .pipe(uglify())
		    .pipe(gulp.dest(config.bower.scripts.destination))
		    .pipe(jsFilter.restore)
		.pipe(scssAndCssFilter)
            .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
	        .pipe(concat(config.bower.styling.name))
            .pipe(minifyCss())
		    .pipe(gulp.dest(config.bower.styling.destination));
});