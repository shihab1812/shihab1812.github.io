/* File: gulpfile.js */


/** @author Shihab PM ( UI Developer )
 *  Loading the main app module with the dependent modules
 */


// grab our gulp packages
const gulp = require('gulp'), //importing GULP module
      gutil = require('gulp-util'), // module to console log message
      webserver = require('gulp-webserver'), // module to run a webserver
      autoprefixer = require('gulp-autoprefixer'), // module to add autp-prefixers to css to support properties across all web-browsers
      sass = require('gulp-sass') // module to convert SASS into CSS
      imagemin = require('gulp-imagemin'), // Image Minification
      jshint = require('gulp-jshint');

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

// create a task to minify images
gulp.task('minifyImages', function () {
    gulp.src('folio_assets/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('folio_assets/images/'))
});

// Build a buffer CSS

gulp.task('build-buffer-css', function () {
    return gulp.src('folio_assets/sass/bundle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('folio_assets/sass/buffer'));
});

//JS Hinting
gulp.task('lint', function () {
    return gulp.src('folio_assets/js/src/**')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/**
 * Watchable Tasks
 */


gulp.task('watch', function () {
    gulp.watch('folio_assets/sass/**/*.scss', ['build-buffer-css']);
    gulp.watch('folio_assets/sass/buffer/bundle.css',['cssPrefixer']);
    gulp.watch('folio_assets/js/src/**', ['lint']);
    gulp.watch('folio_assets/images', ['minifyImages']);
});



/**
 * Defining default tasks and its dependencies
 */


// create a default task and just log a message
gulp.task('default', ['webserver', 'build-buffer-css', 'cssPrefixer', 'minifyImages', 'lint', 'watch']);




/**
 * Manual Gulp Task Groups 
 */

// Run this task when ever new library is added
gulp.task('copyLibs', function () {
    var folders = ["bootstrap", "jquery", "tippy.js", "angular", "spinthatshit"];
    // copy any html files in source/ to public/
    folders.forEach((folder) => {
        gulp.src('node_modules/' + folder + '/**').pipe(gulp.dest('folio_assets/libs/' + folder));

    });
});