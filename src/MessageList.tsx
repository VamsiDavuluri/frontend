import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  id: number;
  content: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/messages/')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the messages!', error);
      });
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
