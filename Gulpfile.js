'use strict';

// Get environment variables
require('dotenv').config();

const gulp    = require('gulp');
const sass    = require('gulp-sass');
const guidePusher = require('zendesk-guide-pusher');

// Compile SASS
gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// Watch SASS and compile
gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// Download help center theme
gulp.task('download', function(done) {
	guidePusher.download(config)
	.then(function() {
		done();
	});
});

// Upload help center theme
gulp.task('upload', function(done) {
	guidePusher.upload(config)
	.then(function() {
		done();
	});
});

// Publish help center theme
gulp.task('publish', function(done) {
	guidePusher.publish(config)
	.then(function() {
		done();
	});
});

// Watch theme and push
gulp.task('upload:watch', () => {
    gulp.watch(['./dist/*', './templates/*'], ['upload']);
});

// Watch theme and push + publish
gulp.task('push-publish:watch', () => {
    gulp.watch(['./dist/*', './templates/*'], ['upload', 'publish']);
});