const noteRepo = require('../methods/noteMethod');

const createNote = async (data) => await noteRepo.createNote(data);
const getActiveNotes = async () => await noteRepo.getNotes(false);
const getArchivedNotes = async () => await noteRepo.getNotes(true);
const getAllNotes = async () => await noteRepo.getAllNotes();
const archiveNote = async (id, archived) =>
  await noteRepo.archiveNote(id, { archived });
const updateNote = async (id, content) =>
  await noteRepo.updateNote(id, { content });
const deleteNote = async (id) => await noteRepo.deleteNote(id);

module.exports = {
  createNote,
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  archiveNote,
  updateNote,
  deleteNote,
};
