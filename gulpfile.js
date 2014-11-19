var gulp = require('gulp'),
    browserify = require('browserify'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    webserver = require('gulp-webserver');

gulp.task('clean', function(cb) {
    del(['build/**'], cb);
});

var libs = [
    'angular',
    'angular-resource',
    'lodash'
];

gulp.task('build', function() {

    //Libraries
    var libBundle = browserify({
    });

    libs.forEach(function(lib){
      libBundle.require(lib);
    });

    libBundle.transform({global: true}, 'browserify-shim');
    libBundle.bundle()
        .pipe(source('lib.js'))
        .pipe(gulp.dest('./build'));


    //Application
    var appBundle = browserify('./app.js')

    libs.forEach(function(lib){
      appBundle.external(lib);
    });

    appBundle
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('server', function(){

  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html',
      port:9000
    }));

});