'use strict';
const util = require('util');

let installed = false;

const hardRejection = (log = console.error) => {
	if (installed) {
		return;
	}

	installed = true;

	process.on('unhandledRejection', error => {
		if (!(error instanceof Error)) {
			error = new Error(`Promise rejected with value: ${util.inspect(error)}`);
		}

		log(error.stack);
		process.exit(1);
	});
};

module.exports = hardRejection;
module.exports.default = hardRejection;
