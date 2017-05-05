/* File: gulpfile.js */

// grab our gulp packages
const gulp = require('gulp'),
    gutil = require('gulp-util'), // module to console log message
    webserver = require('gulp-webserver'), // module to run a webserver
    autoprefixer = require('gulp-autoprefixer'); // module to add autp-prefixers to css to support properties across all web-browsers

/**
 * task groups that goes into Default task's dependency
 */

// Create a server task
gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port: 8056,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

// create a task to autoprefix SASS compiled css 
gulp.task('cssPrefixer', function () {
     gulp.src('folio_assets/sass/buffer/bundle.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('folio_assets/css'))

});

// create a default task and just log a message
gulp.task('default', ['webserver']);


/**
 * Manual Gulp Task Groups 
 */

// Run this task when ever new library is added
gulp.task('copyLibs', function () {
    var folders = ["bootstrap", "jquery", "tippy.js"];
    // copy any html files in source/ to public/
    folders.forEach((folder) => {
        gulp.src('node_modules/' + folder + '/**').pipe(gulp.dest('folio_assets/libs/' + folder));

    });
});