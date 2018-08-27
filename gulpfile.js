var gulp = require('gulp');

gulp.task('copy-dist', function () {
  console.log('Copying ion-tooltips dist output up one directory');
  gulp.src('./dist/src/*').pipe(gulp.dest('./dist'));
});

gulp.task('default', ['copy-dist']);
