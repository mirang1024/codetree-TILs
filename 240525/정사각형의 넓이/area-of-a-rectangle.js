const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let squareArea = n ** 2

console.log(squareArea);

if (n < 5) {
    console.log("tiny");
}