const fs = require("fs");
let ft = Number(fs.readFileSync(0).toString());
let cm = (30.48 * ft).toFixed(1);

console.log(cm)