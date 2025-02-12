const Note = require('../models/noteModel');

const createNote = async (data) => await Note.create(data);
const getNotes = async (archived = false) =>
  await Note.findAll({ where: { archived } });
const getAllNotes = async () => await Note.findAll();
const archiveNote = async (id, data) =>
  await Note.update(data, { where: { id } });
const updateNote = async (id, data) =>
  await Note.update(data, { where: { id } });
const deleteNote = async (id) => await Note.destroy({ where: { id } });

module.exports = {
  createNote,
  getNotes,
  getAllNotes,
  archiveNote,
  updateNote,
  deleteNote,
};
