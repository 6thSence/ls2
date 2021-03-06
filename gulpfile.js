'use strict';

// PROJECT
// - - - - - - - - - - - - - - -
global.$ = {
  dev: true,
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    app: require('./gulp/paths/app.js'),
    tasks: require('./gulp/paths/tasks.js'),
    foundation: require('./gulp/paths/foundation.js'),
    sass: require('./gulp/paths/sass.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  webpack: require('webpack'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

// TASKS
// - - - - - - - - - - - - - - -
$.path.tasks.forEach(taskPath => require(taskPath)());

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    // 'sass:foundation',
    'sprite:svg',
    'pug',
    'js:process',
    'copy:fonts',
    'copy:images',
    'copy:resource'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('build', $.gulp.series(
  cb => {$.dev = false; cb()},
  'clean',
  $.gulp.parallel(
    'sass',
    // 'sass:foundation',
    'sprite:svg',
    'pug',
    'js:process',
    'copy:fonts',
    'copy:images',
    'copy:resource'
  )
));