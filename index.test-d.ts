import {expectType} from 'tsd-check';
import hardRejection from '.';
import './register';

expectType<void>(hardRejection());
expectType<void>(hardRejection(console.log));
