var path            = require("path");
var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('html', function() {
    const filesToMove = [`development/*.html`, `development/**/*.html`, '!node_modules/**/*', '!dist/**/*'];
    return gulp.src(filesToMove)
            .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    const filesToMove = [`development/images/*`];
    return gulp.src(filesToMove)
            .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('php', function() {
    const filesToMove = [`development/*.php`];
    return gulp.src(filesToMove)
            .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function () {
    return gulp.src('development/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('js', function () {
    return gulp.src('development/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('sass', function () {
    return gulp.src('development/sass/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('dist'));
  });

gulp.task('default', gulp.parallel('js', 'sass', 'html', 'php', 'fonts', 'images'));


gulp.task('dev', gulp.series('default', function () {}));
  