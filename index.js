'use strict';
const util = require('util');

let installed = false;

const hardRejection = log => {
	if (installed) {
		return;
	}

	installed = true;
	log = log || console.error;

	process.on('unhandledRejection', err => {
		if (!(err instanceof Error)) {
			err = new Error(`Promise rejected with value: ${util.inspect(err)}`);
		}

		log(err.stack);
		process.exit(1);
	});
};

module.exports = hardRejection;
module.exports.default = hardRejection;
