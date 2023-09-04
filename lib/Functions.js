const fs = require("fs");
const path = require("path");


function CreateNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
    return note;
}


function DeleteNote(noteArray, id) {
    let deleteID = parseInt(id);
    noteArray.splice(deleteID, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
}


module.exports = {
    CreateNote,
    DeleteNote
};