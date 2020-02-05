var path            = require("path");
var gulp            = require('gulp');
var uglify          = require('gulp-uglify');

gulp.task('html', function() {
    const filesToMove = [`development/*.html`, '!node_modules/**/*', '!dist/**/*'];
    return gulp.src(filesToMove)
            .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    const filesToMove = [`development/images/*`];
    return gulp.src(filesToMove)
            .pipe(gulp.dest('dist/images'));
});

gulp.task('js', function () {
    return gulp.src('development/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default', gulp.parallel('js', 'html', 'images'));


gulp.task('dev', gulp.series('default', function () {}));
  