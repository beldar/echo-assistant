import { handlers } from './index';
const payload = require('./payload.json');

handlers.Assist.bind({ event: payload })();
