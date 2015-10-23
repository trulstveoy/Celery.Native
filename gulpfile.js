var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var changed = require('gulp-changed');

var tsProject = ts.createProject('tsconfig.json');


gulp.task('clean', function () {
    return del([
      'app/**/*.js'
    ]);
});

gulp.task('build-system', function () {
    return gulp.src(['app/**/*', 'app'])
      .pipe(plumber())
      .pipe(changed(paths.output, { extension: '.ts' }))
      .pipe(ts(tsProject)).js
      .pipe(gulp.dest(paths.output));
});

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['build-system']).on('change', reportChange);  
});