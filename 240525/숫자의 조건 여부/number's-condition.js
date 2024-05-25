const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

if (n >= 113) {
    console.log(1);
} else {
    console.log(0);
}