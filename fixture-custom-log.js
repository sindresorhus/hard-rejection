'use strict';
const hardRejection = require('./');

hardRejection(str => {
	console.log('custom-log', str);
});

Promise.reject(new Error('Unicorn'));
