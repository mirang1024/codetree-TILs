const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let length = Number(input[0]);
let hight = Number(input[1]);

length += 8;
hight *= 3;

console.log(length);
console.log(hight);
console.log(length * hight);