import {handlers} from './index';
const payload = require('./payload.json');

handlers.Assist.bind({ event: payload, emit: (action, msg) => console.log(action,msg) })();
