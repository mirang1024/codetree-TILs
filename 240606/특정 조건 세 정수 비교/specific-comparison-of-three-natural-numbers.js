const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a= Number(input[0]);
const b= Number(input[1]);
const c= Number(input[2]);

if (a < b && a < c) {
    console.log(1);
} else {
    console.log(0);
}

if (a === b && b === C) {
    console.log(1);
} else {
    console.log(0);
}