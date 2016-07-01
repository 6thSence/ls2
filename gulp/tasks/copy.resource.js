'use strict';

module.exports = () => {
  $.gulp.task('copy:resource', () => {
    return $.gulp.src('./source/resource/*')
      .pipe($.gulp.dest($.config.root));
  });
};
