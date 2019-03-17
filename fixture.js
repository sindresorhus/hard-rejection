'use strict';
const hardRejection = require('.');

hardRejection();

Promise.reject(new Error('Unicorn'));
