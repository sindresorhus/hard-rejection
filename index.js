'use strict';
const util = require('util');

let installed = false;

module.exports = log => {
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
		process.exit(1); // eslint-disable-line unicorn/no-process-exit
	});
};
