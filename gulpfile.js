const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
}

function watch() {
    gulp.watch('./src/styles/**/*.scss', styles)
}

exports.default = gulp.series(styles, watch)
