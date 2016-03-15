var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var config = require('../gulp-config.json');

gulp.task('optimize-images', function () {
    gulp.src(config.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [imageminPngquant()]
        }))
        .pipe(gulp.dest(config.imagesDestination));
});