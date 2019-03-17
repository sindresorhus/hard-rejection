'use strict';
const hardRejection = require('.');

hardRejection(string => {
	console.log('custom-log', string);
});

Promise.reject(new Error('Unicorn'));
