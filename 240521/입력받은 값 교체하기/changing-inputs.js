const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let temp = a;
a = b;
b = temp;

console.log(a, b);