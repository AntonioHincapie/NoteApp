import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const createNote = async (data) => axios.post(API_URL, data);

export const getNotes = async (archived) => {
  if (archived === false) {
    const response = axios.get(`${API_URL}/active`);
    return response;
  } else if (archived === true) {
    const response = axios.get(`${API_URL}/archived`);
    return response;
  } else {
    const response = axios.get(`${API_URL}`);
    return response;
  }
};

export const archiveNote = async (id, data) =>
  axios.patch(`${API_URL}/${id}/archive`, data);

export const updateNote = async (id, data) =>
  axios.patch(`${API_URL}/${id}/update`, data);

export const deleteNote = async (id) => axios.delete(`${API_URL}/${id}`);
