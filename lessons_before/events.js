const Emitter = require('lessons_before/events');
const emitter = new Emitter();

// слушатели
const foo = (...fooArgs)=> {console.log(`foo: `, ...fooArgs);}
const bar = (...barArgs)=> {console.log(`bar: `, ...barArgs);}

emitter.on('event_1', foo);
emitter.on('event_1', ()=>console.log('Arrow Lisnr'));
emitter.once('event_1', bar);

emitter.emit('event_1', 1, true, 'word');
emitter.emit('event_1', 2, false, 'excel');

emitter.removeListener('event_1', bar);
emitter.emit('event_1', 3, true, 'poPo');
emitter.emit('event_1', 4, false, 'visio');

emitter.removeAllListeners('event_1');
emitter.emit('event_1', 5, true, 'visio');