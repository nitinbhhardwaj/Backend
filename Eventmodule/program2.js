//Create trigger event click and mouseover and call that mouseover event in click event
//Simulate DOM like event handling in Node.js using event emitter
//addEventListener-.on()
//dispatchEvent-.emit()
const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('mouseover',()=>{
    console.log('Mouseover event triggered');
});
emitter.emit('click');
emitter.emit('mouseover');