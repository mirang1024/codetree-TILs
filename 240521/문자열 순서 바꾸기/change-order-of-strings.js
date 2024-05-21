const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let t = input[0];
let s = input[1];

[t, s] = [s, t];

console.log(t);
console.log(s);