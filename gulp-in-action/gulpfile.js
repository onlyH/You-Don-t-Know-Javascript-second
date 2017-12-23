//导入模块

var gulp = require('gulp'); 
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer'); 
// 使用 gulp.task() 方法注册一个任务 // 第一个参数是任务名称 // 第二个参数是任务的执行逻辑
gulp.task('styles', function() { 
	return gulp.src('sass/demo.scss') 
	.pipe(sass()) 
	.pipe(autoprefixer()) 
	.pipe(gulp.dest('css')); });
	
//gulp.watch() 函数优化一下自动化任务，让 Sass 文件每次发生改动时可以自动编译。著作权归作者所有。
gulp.task('watch',function(){
	gulp.watch('sass/demo.scss',['styles']);
})
