// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // mouseover event
// emitter.on("mouseover", () => {
//     console.log("Mouseover event triggered");
// });

// // click event
// emitter.on("click", () => {
//     console.log("Click event triggered");

//     // Trigger mouseover inside click
//     emitter.emit("mouseover");
// });

// // Trigger click
// emitter.emit("click");

const EventEmitter = require("events");



const emitter=new EventEmitter();

emitter.on("click",(name)=>{
    console.log(`Click event triggered for ${name}`);
});
emitter.on("mouseover",()=>{
    console.log("Mouseover event triggered");
});
emitter.emit('click','Nitin Bhardwaj');
emitter.emit('mouseover');

//click is triggered event and if you pass any variable as an argument, it will be received by the event listener