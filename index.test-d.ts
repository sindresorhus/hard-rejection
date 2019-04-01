import {expectType} from 'tsd';
import hardRejection = require('.');
import './register';

expectType<void>(hardRejection());
expectType<void>(hardRejection(console.log));
