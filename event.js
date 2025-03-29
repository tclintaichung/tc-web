import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.on('tryMe', (name) => {
  console.log(`Hi ${name}, It's a Good try..`);
});

emitter.emit('tryMe', 'tclin');