const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());

if (a % 2 !== 0) {
    console.log(a);
    console.log("minus");
}