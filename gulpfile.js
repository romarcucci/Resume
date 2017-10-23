var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
	gulp.src('css/global.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);
