const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n >= 100) {
    console.log("vapor");
}
else if (n >= 0) {
    console.log("water");
}
else {
    console.log("ice")
}