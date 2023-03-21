// TODO 1
const {EventEmitter} = require ('events');
const myEventEmitter = new EventEmitter();
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
  myEventEmitter.on('birthday', birthdayEventListener);
  
  // TODO 3
 
  
  // TODO 4
  myEventEmitter.emit('birthday', 'Sativa');