import * as log4js from 'log4js';

log4js.configure({
    appenders: { stdout: { type: 'stdout', layout: { type: 'colored' } } },
    categories: {
        default: { appenders: ['stdout'], level: 'info' },
    },
});

export default log4js;
