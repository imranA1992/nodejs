const fs = require("fs");

fs.writeFileSync("notes.txt", " hello! my name is Imran");
fs.appendFileSync("notes.txt", "\nThis is the first node.js app!");
