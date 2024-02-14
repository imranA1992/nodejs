const fs = require("fs");

const getnotes = function (a) {
  return a;
};
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New Note Added!");
  } else {
    console.log("Note Title Taken!");
  }
};

const saveNotes = function (notes) {
  try {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
    console.log("Note added successfully!");
  } catch (error) {
    console.error("Error saving notes:", error.message);
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNote: getnotes,
  addNote: addNote,
};
