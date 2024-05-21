const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

let a = Number(arr[0]).toFixed(3);
let b = Number(arr[1]).toFixed(3);
let c = Number(arr[2]).toFixed(3);

console.log(a);
console.log(b);
console.log(c);