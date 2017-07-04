
var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('jsTask',function(){
	gulp.src('*')
	.pipe(uglify())
	.pipe(gulp.dest('*'));
});
gulp.task('default',['jsTask'])
