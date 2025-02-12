const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.get('/active', noteController.getActiveNotes);
router.get('/archived', noteController.getArchivedNotes);
router.patch('/:id/archive', noteController.archiveNote);
router.patch('/:id/update', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
