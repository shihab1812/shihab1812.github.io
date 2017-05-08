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
      jshint = require('gulp-jshint'), // A module that logs the missing javascript best practices and gives hint for the cause of error 
      concat = require('gulp-concat'), // A module to concat JS files 
      concatCss = require('gulp-concat-css'); // A module to concat CSS file 


 // ==========================================================================
    /**
     * task groups that goes into Default task's dependency 
     */
 // ==========================================================================

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
        gulp.task('cssPrefixer', ['build-buffer-css'], function () {
            gulp.src('folio_assets/sass/buffer/bundle.css')
                .pipe(autoprefixer())
                .pipe(gulp.dest('folio_assets/css'))

        });

        // Build a buffer CSS without browser prefixes
        gulp.task('build-buffer-css', function () {
            return gulp.src('folio_assets/sass/bundle.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('folio_assets/sass/buffer'));
        });

        // create a task to minify images
        gulp.task('minifyImages', function () {
            gulp.src('folio_assets/images/**/*.*')
                .pipe(imagemin())
                .pipe(gulp.dest('folio_assets/images/'))
        });

        //JS Hinting
        gulp.task('lint', function () {
            return gulp.src('folio_assets/js/src/**')
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
        });

// ==========================================================================
    /**
     * Watchable Tasks 
     */
 // ==========================================================================


        // bundle all task that goes into watch 
        gulp.task('watch', function () {
            gulp.watch('folio_assets/sass/**/*.scss', ['build-buffer-css']);
            gulp.watch('folio_assets/sass/buffer/bundle.css',['cssPrefixer']);
            gulp.watch('folio_assets/js/src/**', ['lint']);
            gulp.watch('folio_assets/images', ['minifyImages']);
        
        });


// ==========================================================================
/**
 * Defining default tasks and its dependencies
 */
// ==========================================================================

        // create a default task and just log a message
        gulp.task('default', ['webserver', 'cssPrefixer', 'minifyImages', 'lint','concat_all_Lib_Js', 'watch']);



// ==========================================================================
/**
 * Manual Gulp Task Groups 
 */
// ==========================================================================


        //Vendor Js concat and uglify task ... run this task when ever new library is added to node_modules that is not a dev-dependency
        gulp.task('concat_all_Lib_Js',function(){
            var libs=['node_modules/jquery/dist/jquery.min.js','shihab1812.github.io/node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/tippy.js/dist/tippy.min.js','node_modules/jquery.easing/jquery.easing.min.js'];
            return gulp.src(libs)
            .pipe(concat('vendorBundle.js'))
            .pipe(gulp.dest('./folio_assets/libs/'));

        
        });

        //Concat the CSS libraries .. run this whenever a new CSS library is added
        gulp.task('cssLibConcat', function () {
        var libs = ['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/tippy.js/dist/tippy.css']
        return gulp.src(libs)
            .pipe(concatCss("vendorBundle.css"))
            .pipe(gulp.dest('folio_assets/libs/'));
        });


 /* GULP file ENDS */