const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");

let num = input[0];
let xxxx = input[1];
let yyyy = input[2];

console.log(`${num}-${yyyy}-${xxxx}`);