const fs = require("fs");


// // // Synchronous Task :- 
console.log("Start");

const readData = fs.readFileSync('sync.txt', "utf-8");
console.log("Sync :-", readData);


// // // // Here, we are getting the Output as Terminal as :-
// // // // Start
// // // // Sync :- My name is Lakhan.
// // // // Synchronous Task also known as the Blocking Task.
// // // // Therefore, console.log("Start"); have to run first then only the next will run i.e., (console.log("Sync :-", readData);)
