const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
}

async function images() {
    const imagemin = (await import("gulp-imagemin")).default
    return gulp.src('./src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images)

exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles))
}