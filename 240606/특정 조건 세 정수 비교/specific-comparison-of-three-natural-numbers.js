const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a= Number(input[0]);
const b= Number(input[1]);
const c= Number(input[2]);

let result1, result2;

if (a < b && a < c) {
    result1 = 1;
} else {
    result1 = 0;
}

if (a === b && b === c) {
    result2 = 1;
} else {
    result2 = 0;
}

console.log(result1, result2)