const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a= Number(input[0]);
const b= Number(input[1]);
const c= Number(input[2]);

let min;

if (b > a && b < c) {
    console.log(1);
}
else {
    console.log(0);
}