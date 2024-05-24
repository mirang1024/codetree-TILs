const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let h = Number(input[0]);
let w = Number(input[1]);

let b = (w * 10000) / (h ** 2)

console.log(Math.trunc(b));

if (b >= 25) {
    console.log("Obesity");
}