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



fs.readFile('sync.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log("Async :-", data);
});
// // // // Here, we are getting the Output as Terminal as :-
// // // // Start
// // // // Sync :- My name is Lakhan.
// // // // Async :- My name is Lakhan.
// // // // Therefore, Synchronous Task execute first then only after its completion Asynchronous will execute. Whereas, Asynchronous Task do not put the rest of the code to wait. If it is taking time it will not block the path of rest of the code such as Synchronous do.
