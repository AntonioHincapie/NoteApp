import React, { useState } from 'react';
import { updateNote } from '../services/noteService.js';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Typography, Space } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

function UpdateForm() {
  const id = useParams().id;
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await updateNote(id, { content });
      navigate('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Update Note</Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Content" required>
          <TextArea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Update note content"
          />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Update Note
          </Button>
          <Button onClick={() => navigate('/')}>Back</Button>
        </Space>
      </Form>
    </div>
  );
}

export default UpdateForm;
