const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());




if (n >= 100) {
    console.log("vapor");
}

if (n >= 0) {
    console.log("water");
}
else if (n < 0) {
    console.log("ice")
}