const noteService = require('../services/noteService');

const createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getActiveNotes = async (req, res) => {
  try {
    const notes = await noteService.getActiveNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getArchivedNotes = async (req, res) => {
  try {
    const notes = await noteService.getArchivedNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const archiveNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { archived } = req.body;
    await noteService.archiveNote(id, archived);
    res.status(200).json({ message: 'Note updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await noteService.updateNote(id, content);
    res.status(200).json({ message: 'Note updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await noteService.deleteNote(id);
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  archiveNote,
  updateNote,
  deleteNote,
};
