const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());

console.log(a);

if (a < 0) {
    console.log("minus");
}