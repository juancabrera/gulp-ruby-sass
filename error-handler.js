'use strict';

// remove temp directory and line breaks for more Sass-like logging
function formatMsg (msg, tempDir) {
	msg = msg.replace(new RegExp((tempDir) + '/?', 'g'), '');
	msg = msg.trim();
	return msg;
}

// convenience function to create a gulp error
function newErr (err, opts) {
	return new gutil.PluginError('gulp-ruby-sass', err, opts);
}

var matchNoSass = /execvp\(\): No such file or directory|spawn ENOENT/; // break this into each error for each output

var msgNoSass = 'Missing the Sass executable. Please install and make available on your PATH.';

var matchSassErr = /error\s/;
var matchNoBundler = /ERROR: Gem bundler is not installed/;
var matchNoGemfile = /Could not locate Gemfile/;
var matchNoBundledSass = /bundler: command not found: sass|Could not find gem/;

// Maybe have two adapters - an incoming one and an outgoing one
// so one reads the messages and decides which outgoing function to call
// and the outgoing functions are arranged by source like Sass/bundler

// incoming stdout
  // Errors
	  // Ruby?: bundlr not installed
	  // bundlr: no gemfile, no correct version
		// 	matchSassErr,
		// 	matchNoBundler,
		// 	matchNoGemfile,
		// 	matchNoBundledSass / bundler sass version error


  // log to console
    // good sass logging

// incoming srderr
  // Errors
		// bundler: no version of sass installed
		// spawn: no sass executable
		// matchNoBundledSass
		// matchNoSass

  // log to console
		// sass: warnings, debug statements

// incoming error
  // Errors
		// spawn: no sass executable -- hijack this one because the error doesn't mean much to most people
		// matchNoSass

		// Other errors that go through


// message emission: Sass
// message emission: Bundler


{
	sassLog: function () {}
	sassErr: function () {}
	bundleErr: function () {}
	spawnErr: function () {}
	rubyErr: function () {}
}
