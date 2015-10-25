var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var changed = require('gulp-changed');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('move', function(){
  return gulp.src(['src/**/*', '!src/**/*.ts'])
    .pipe(changed('app'))
    .pipe(gulp.dest('app'));    
});

gulp.task('clean', function () {
    return del([
      'app/**/*'
    ]);
});

gulp.task('build-system', function () {
    return gulp.src(['src/**/*', 'app'])
      .pipe(plumber())
      .pipe(changed('app', { extension: '.ts' }))
      .pipe(ts(tsProject)).js
      .pipe(gulp.dest('app'));
});

gulp.task('build', ['move', 'build-system']);

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}



gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']).on('change', reportChange);  
});