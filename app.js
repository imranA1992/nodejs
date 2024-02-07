const validator = require("validator");
const chalks = require("chalk");
const getnotes = require("./notes.js");

const getnote = getnotes("Your notes...");

console.log(getnote);

console.log(validator.isEmail("imransiddiqui124@gmail.com"));
console.log(validator.isURL("https://mead.io"));
console.log(
  chalks.dim.italic.bold.strikethrough.underline.magenta("Success.....")
);
