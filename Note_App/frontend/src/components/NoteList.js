import React, { useCallback, useEffect, useState } from 'react';
import { getNotes, archiveNote, deleteNote } from '../services/noteService.js';
import { useNavigate } from 'react-router-dom';
import { Button, List, Space, Typography } from 'antd';

const { Title } = Typography;

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [noteState, setNoteState] = useState('Active');
  const navigate = useNavigate();

  const loadNotes = useCallback(async (state) => {
    try {
      const archived =
        state === 'Active' ? false : state === 'Archived' ? true : null;
      const response = await getNotes(archived);
      setNotes(response.data);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  }, []);

  useEffect(() => {
    loadNotes(noteState);
  }, [noteState, loadNotes]);

  const handleArchive = useCallback(
    async (id, archived) => {
      try {
        await archiveNote(id, { archived: !archived });
        loadNotes(noteState);
      } catch (error) {
        console.error('Error archiving note:', error);
      }
    },
    [loadNotes, noteState]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        await deleteNote(id);
        loadNotes(noteState);
      } catch (error) {
        console.log('Error deleting note:', error);
      }
    },
    [loadNotes, noteState]
  );

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Notes</Title>
      <Space style={{ marginBottom: '20px' }}>
        <Button type="primary" onClick={() => navigate('/create')}>
          Create Note
        </Button>
        <Button onClick={() => setNoteState('Active')}>Active Notes</Button>
        <Button onClick={() => setNoteState('Archived')}>Archived Notes</Button>
        <Button onClick={() => setNoteState('All')}>History</Button>
      </Space>
      <List
        bordered
        dataSource={notes}
        renderItem={(note) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => navigate(`/update/${note.id}`)}
                style={{ display: note.archived ? 'none' : 'inline-block' }}
              >
                Update
              </Button>,
              <Button
                type="link"
                onClick={() => handleArchive(note.id, note.archived)}
              >
                {note.archived ? 'Activate' : 'Archive'}
              </Button>,
              <Button type="link" danger onClick={() => handleDelete(note.id)}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta title={note.title} description={note.content} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default NoteList;
