const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let avr = Math.floor(sum / input.length);

console.log(sum);
console.log(avr);
console.log(sum - avr);