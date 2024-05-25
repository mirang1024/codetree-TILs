const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if (a < 0.5) {
    console.log("Low");
}
else if (a >= 1.0) {
    console.log("High");
}
else {
    console.log("Middle");
}