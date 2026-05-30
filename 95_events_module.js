// 95_events_module.js
// EventEmitter example

const EventEmitter = require('events');
const ee = new EventEmitter();
ee.on('ping', (msg) => console.log('pong:', msg));
ee.emit('ping', 'hello');