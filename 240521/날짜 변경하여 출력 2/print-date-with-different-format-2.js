const fs = require("fs");
let date = fs.readFileSync(0).toString().trim().split("-");

let yyyy = date[0];
let mm = date[1];
let dd = date[2];

console.log(yyyy.mm.dd);