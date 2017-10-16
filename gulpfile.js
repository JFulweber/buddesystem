var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default',['watch']);

gulp.task('sass', function(){
    console.log('logging');
    return gulp.src('./src/app/style/**/*.scss')
    .pipe(sass())
    .pipe(rename(function(file){
        file.dirname = path.resolve('./src/app/'+file.dirname+'/');
        console.log(file.dirname);    
    }))
    .pipe(gulp.dest('/dist/'))
})

gulp.task('watch', function(){
    console.log('watching');
    gulp.watch('./src/app/style/**/**/*.scss', ['sass']);
})