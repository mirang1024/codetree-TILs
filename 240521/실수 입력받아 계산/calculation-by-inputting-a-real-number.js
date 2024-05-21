const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

let a = Number(arr[0]);
let b = Number(arr[1]);

let result = (a + b).toFixed(2);

console.log(result);