const fs = require('fs');
const path = require('path');


const fileName = "sync.txt";
const filePath = path.join(__dirname, fileName);
fs.writeFileSync(filePath, "My name is Lakhan.", 'utf-8');
console.log("File Created Successfully!");
// // // // Here, we are getting the Output as Terminal as :-
// // // // File Created Successfully!
// // // // Therefore, new file is created named as sync.txt;