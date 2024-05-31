const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if (a % 2 === 0) {
    let result = a / 2;
    if (result % 2 === 1) {
        let final = (result + 1) / 2;
        console.log(final);
    }
    else {
        console.log(a);
    }
}