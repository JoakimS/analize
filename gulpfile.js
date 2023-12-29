const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const  {watch}  = require('gulp');
watch(['es6/**/*.js'], function(cb) {
  cb();
});
gulp.task('default', function(done){
    gulp.src("es6/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    console.log("bravoo!");
    done()
  
});

