'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import less from  'gulp-less';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import util from  'gulp-util';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from  'gulp-sourcemaps';


const paths = {
    less: 'src/css/',
    dist: 'dist/',
    src: 'src/'
};

gulp.task("es5", function(){
    gulp.src(`${paths.src}js/es6/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(`${paths.src}js/es5/`));
})

gulp.task('script', function() {
    // 1. 找到文件
    gulp.src(`${paths.src}js/es5/**/*.js`)
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


gulp.task('build', function() {
    browserify('src/js/es6/app.js', { debug: true })
        .add(require.resolve('babel-polyfill'))
        .transform(babelify)
        .bundle()
        .on('error', util.log.bind(util, 'Browserify Error'))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default' , ['es5', 'script', 'less', 'auto', 'build']);//, 'script', 'less', 'auto'