const validator = require("validator");
const chalks = require("chalk");
const yargs = require("yargs");
const getnotes = require("./notes.js");
const { default: chalk } = require("chalk");

yargs.version("1.1.0");

//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(chalks.bold("TITLE : " + argv.title));
    console.log(chalks.inverse.red("BODY : " + argv.body));
  },
});

//create Remove command

yargs.command({
  command: "remove",
  describe: "removing a note",
  handler: function () {
    console.log("Removing the new note!");
  },
});

//create list command

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    console.log("listing all notes!");
  },
});

//create read command

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading the note!");
  },
});
yargs.parse();
