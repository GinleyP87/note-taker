const fs = require("fs");
const path = require('path');
console.log(path.resolve("./db/db.json"));
let noteData = JSON.parse(fs.readFileSync("./db/db.json"));
const router = require('express').Router();



router.get("/notes", (req, res) => {
    res.json(noteData);
    });


router.get("/notes/:id", (req, res) => {
    res.json(noteData[Number(req.params.id)]);
    });


router.post("/notes", (req, res) => {
    const createNewNote = req.body;
    const noteIdNum = (noteData.length).toString();
    console.log(noteIdNum);
    createNewNote.id = noteIdNum;
    noteData.push(createNewNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData), function (err) {
        if (err) throw (err);
    });
    res.json(noteData);
});


router.delete("/notes/:id", (req, res) => {
    const noteIdNum = req.params.id;
    const resetId = 0;
    console.log(`Deleting note # ${noteIdNum}`);
    noteData = noteData.filter(removeNote => {
        return removeNote.id != noteIdNum;
    });
    for (removeNote of noteData) {
        console.log(removeNote.title);
        removeNote.id = resetId.toString();
        resetId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
    res.json(noteData);
});


module.exports = router