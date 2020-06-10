const EventEmitter = require('events');
const MyLogger = require('./logger');
class MyEmitter extends EventEmitter {}

// init Object

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
	console.log('Event Fired');
});

myEmitter.emit('event');

const logger1 = new MyLogger();

logger1.on('message', (data) => {
	console.log(data);
});

logger1.log('asdfasdfasfd');
