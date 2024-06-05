const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const a = Number(input[0]);
const input2 = input[1].trim().split(" ");
const b = Number(input[0]);
const c = Number(input[1]);
const d = Number(input[2]);
const e = Number(input[3]);

if (a > b) {
    console.log(1);
} else {
    console.log(0);
}

if (a > c) {
    console.log(1);
} else {
    console.log(0);
}

if (b > d) {
    console.log(1);
} else {
    console.log(0);
}

if (b > e) {
    console.log(1);
} else {
    console.log(0);
}