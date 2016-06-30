'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import less from  'gulp-less'

const paths = {
    less: 'src/css/',
    dist: 'dist/',
    src: 'src/'
};


gulp.task('script', function() {
    // 1. 找到文件
    gulp.src(`${paths.src}js/*.js`)
        // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest(`${paths.dist}js/`));
});

gulp.task('less', function() {
    gulp.src(`${paths.less}*.less`)
        .pipe(less())
        .pipe(gulp.dest(`${paths.dist}css/`));
});

gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch(`${paths.src}/js/*.js`, ['script']);
    gulp.watch(`${paths.less}*.less`, ['less']);
});

gulp.task('default' , [ 'script', 'less', 'auto']);