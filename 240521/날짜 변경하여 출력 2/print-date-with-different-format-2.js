const fs = require("fs");
let date = fs.readFileSync(0).toString().split("-");

let yyyy = date[2];
let mm = date[1];
let dd = date[0];

console.log(`${yyyy}.${mm}.${dd}`);