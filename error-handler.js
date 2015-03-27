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

module.exports =
	stdout: function (message) {
		// Errors
		// Ruby (?)
		/Could not find gem/

		// RVM
		/ERROR: Gem bundler is not installed, run `gem install bundler` first./

		// Bundler
		/Could not locate Gemfile/

		// Sass
		// RWRW Should this be /^error/?
		/error\s/

		// Log to console
		// if not those ^^, good Sass output
	}

	stderr: function (message) {
		// Bundler
		/bundler: command not found: sass/

		// node spawn
		/execvp\(\): No such file or directory|spawn ENOENT/;
		'Missing the Sass executable. Please install and make available on your PATH.';

		// Log to console
		// if not those ^^, Sass warnings, debug statements
	}

	err: function (message) {
		// node spawn
		/execvp\(\): No such file or directory|spawn ENOENT/;
		'Missing the Sass executable. Please install and make available on your PATH.';

		// Any other errors
	}
