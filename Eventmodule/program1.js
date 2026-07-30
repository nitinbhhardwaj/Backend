//Event
//EventEmitter- register event or event listener, on(),emit(event param)-trigger event/create event/fire event

const EventEmitter=require('events');
const event=new EventEmitter();
event.on("greet",()=>{
    console.log("this is event listener");
});
event.emit("greet");

const even=new EventEmitter();
event.on("name",()=>{
    console.log("Name:Nitin Bhardwaj");
});
event.emit("name");

const eve=new EventEmitter();
event.on("age",()=>{
    console.log("Age:36");
});
event.emit("age");