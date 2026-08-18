const EventEmitter = require("events");

const emitter = new EventEmitter();

// mouseover event
emitter.on("mouseover", () => {
    console.log("Mouseover event triggered");
});

// click event
emitter.on("click", () => {
    console.log("Click event triggered");

    // Trigger mouseover inside click
    emitter.emit("mouseover");
});

// Trigger click
emitter.emit("click");