
//var gulp = require('gulp');  
//var babel = require('gulp-babel');  
//var config={  
//  es6file:'ajax.js',  
//  es5file:'js/'  
//};  
//gulp.task('es6', function () {  
//  return gulp.src(config.es6file)  
//      .pipe(babel({  
//          presets: ['es2015']  
//      }))  
//        .pipe(uglify())  
//      .pipe(gulp.dest(config.es5file));  
//});  
//gulp.task('default', ['es6'], function () {  
//  
//});  













var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件

//压缩js
gulp.task('jsTask', function(){
	gulp.src('js/bullet.js')
	.pipe(babel({presets:['es2015']})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('code/'));
});
gulp.task('default', ['jsTask']); 
