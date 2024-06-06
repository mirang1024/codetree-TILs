const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a= Number(input[0]);
const b= Number(input[1]);
const c= Number(input[2]);

let min;

if (a < b && a < c) {
    min = a;
}
else if (b < a && b < c) {
    min = b;
}
else if (c < a && c < b) {
    min = c;
}

console.log(min);