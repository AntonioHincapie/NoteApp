import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/create" element={<NoteForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
