'use strict';

module.exports = () => {
  $.gulp.task('copy:fonts', cb => {
    return $.gulp.src('./source/fonts/*')
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
