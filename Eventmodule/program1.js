//Event
//EventEmitter- register event or event listener, on(),emit(event param)-trigger event/create event/fire event

const EventEmitter=require('events');
class MyEvent extends EventEmitter{}
const events=new MyEvent();
event.on("greet",(name)=>{
    console.log(`hello cse 24 my name is ${name}`);//template literals-`${vari}`
});
events.on("exit",()=>{})
event.emit("greet","Nitin Bhardwaj");

// const even=new EventEmitter();
// event.on("name",()=>{
//     console.log("Name:Nitin Bhardwaj");
// });
// event.emit("name");

// const eve=new EventEmitter();
// event.on("age",()=>{
//     console.log("Age:36");
// });
// event.emit("age");