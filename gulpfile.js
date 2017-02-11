'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;


gulp.task('styles', () => {
    gulp.src('./style/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/css/'));
});


gulp.task('browser', () => {
	browserSync.init({
		server:  {
			baseDir: './'
		}
	});
});

gulp.task('default', ['browser'],() => {
	gulp.watch('./js/*.js',reload);
	gulp.watch('./**/*.html', reload);
});