const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let a = Number(arr[1]).toFixed(2);
let b = Number(arr[2]).toFixed(2);
let c = arr[0];

console.log(c);
console.log(a);
console.log(b);