const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const sA= input[0].trim().split(" ");
const sB= input[1].trim().split(" ");

const mA = Number(sA[0]);
const eA = Number(sA[1]);
const mB = Number(sB[0]);
const eB = Number(sB[1]);

if (mA > mB && eA > eB) {
    console.log(1);
}
else {
    console.log(0);
}