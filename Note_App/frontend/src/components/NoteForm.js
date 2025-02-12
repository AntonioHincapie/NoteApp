import React, { useState } from 'react';
import { createNote } from '../services/noteService.js';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Space } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await createNote({ title, content });
      navigate('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Create Note</Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Note Title" required>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your note title"
          />
        </Form.Item>
        <Form.Item label="Note Content" required>
          <TextArea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your note content"
          />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Save Note
          </Button>
          <Button onClick={() => navigate('/')}>Back</Button>
        </Space>
      </Form>
    </div>
  );
}

export default NoteForm;
