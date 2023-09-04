const router = require("express").Router();
const {CreateNote,DeleteNote} = require('../../lib/Functions');
const {notes} = require('../../db/db');

router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = CreateNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    DeleteNote(notes, req.params.id);
    res.json(notes);
 })
 

module.exports = router;