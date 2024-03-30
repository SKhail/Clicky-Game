import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegPaperPlane } from 'react-icons/fa';

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <input type='text' value={text} onChange={handleChange} placeholder='Type a message...' className='inputField' />
      <button
        type='submit'
        className='submitButton'
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        <FontAwesomeIcon icon={FaRegPaperPlane} style={{ fontSize: '20px' }} />
        <span style={{ marginLeft: '5px' }}></span>
      </button>
    </form>
  );
};

export default ChatInput;
