// Event
// EventEmitter - register event/listener using on()
// emit() - trigger/fire an event

const EventEmitter = require("events");

class MyEvent extends EventEmitter {}

const events = new MyEvent();

events.on("greet", (name) => {
    console.log(`Hello CSE 24, my name is ${name}`);
});

events.on("exit", () => {
    console.log("Exit event triggered");
});

events.emit("greet", "Nitin Bhardwaj");

// events.emit("exit");