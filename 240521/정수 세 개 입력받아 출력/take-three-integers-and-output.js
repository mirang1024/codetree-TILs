const fs = require("fs");
let arr1 = fs.readFileSync(0).toString().split("\n");
let arr2 = arr1[0].split(" ");

let a = Number(arr2[0]);
let b = Number(arr2[1]);
let c = Number(arr1[1]);

console.log(a, b, c);