var gulp = require('gulp'),
    browserify = require('browserify'),
    del = require('del'),
    source = require('vinyl-source-stream');

gulp.task('clean', function(cb) {
    del(['build/**'], cb);
});

var libs = [
    'angular',
    'lodash'
];

gulp.task('build', function() {
    var libBundle = browserify({
    });
    libBundle.require('angular');
    libBundle.require('lodash');
    libBundle.transform({global: true}, 'browserify-shim')
    libBundle.bundle()
        .pipe(source('lib.js'))
        .pipe(gulp.dest('./build'));

    var appBundle = browserify('./app.js')
    appBundle.external('angular');
    appBundle.external('lodash');
    appBundle
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build'));
});
