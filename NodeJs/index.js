const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is readableStream from close event callback")
});

setImmediate(() => console.log("setImmediate cheque 1"));
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => console.log("Promise.resolve().then() 1"));
process.nextTick(() => console.log("process.nextTick()"));














// setTimeout(() => console.log("setTimeout 1"), 0);
// setImmediate(() => console.log("cheque queue 1"));
// // // setImmediate(() => {
// // //     console.log("cheque queue 2");
// // //     process.nextTick(() => console.log("inner process.nextTick 1"));
// // //     Promise.resolve().then(() => console.log("inner Promise.resolve().then() 1"));

// // // });
// // // setImmediate(() => console.log("cheque queue 3"));





// // // const fs = require("node:fs");


// // // fs.readFile(__filename, () => {
// // //     console.log("this is readfile 1")
// // //     setImmediate(() => console.log("inner cheque queue"))
// // //     process.nextTick(() => console.log("inner process.nextTick 1"));
// // //     Promise.resolve().then(() => console.log("inner Promise.resolve().then() 1"));

// // // });



// // // process.nextTick(() => console.log("process.nextTick 1"));
// // // Promise.resolve().then(() => console.log("Promise.resolve().then() 1"));
// // // setTimeout(() => console.log("setTimeout 1"), 0);
// // // // setImmediate(() => console.log("cheque queue"))
// // // for(let i = 0; i <2000000000; i++) {}


// // // // setTimeout(() => console.log("setTimeout 1"), 1000);
// // // // setTimeout(() => console.log("setTimeout 2"), 500);
// // // // setTimeout(() => console.log("setTimeout 3"), 0);

// // // // // setTimeout(() => console.log("setTimeout 1"), 0);
// // // // // setTimeout(() => {
// // // // //     console.log("setTimeout 2");
// // // // //     process.nextTick(() => console.log("setTimeout process.nextTick"))
// // // // // }, 0);
// // // // // setTimeout(() => console.log("setTimeout 3"), 0);


// // // // // process.nextTick(() => console.log("process.nextTick 1"));
// // // // // process.nextTick(() => {
// // // // //     console.log("process.nextTick 2");
// // // // //     process.nextTick(() => console.log("inner process.nextTick 2"));

// // // // // });

// // // // // process.nextTick(() => console.log("process.nextTick 3"));

// // // // // Promise.resolve().then(() => console.log("Promise.resolve().then() 1"));

// // // // // Promise.resolve().then(() => {
// // // // //     console.log("Promise.resolve().then() 2");
// // // // //     process.nextTick(() => console.log("inner process.nextTick 2.2"));

// // // // // });

// // // // // Promise.resolve().then(() => console.log("Promise.resolve().then() 3"));


// // // // // // Promise.resolve().then(() => console.log("this is promise.resolve"));
// // // // // // process.nextTick(() => console.log("this is process.nextTick"));
// // // // // // // console.log("First");
// // // // // // // process.nextTick(() => console.log("this is process.next 1"))
// // // // // // // console.log("Second")
