const { Router } = require('express');
const router = Router();

const { getNotes, createNote, updateNote, deleteNote, getNote } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;