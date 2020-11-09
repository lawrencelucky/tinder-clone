import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Jeff',
      image: 'https://bit.ly/3n9vfrA',
      message: 'Whats up?',
    },
    {
      name: 'Jeff',
      image: 'https://bit.ly/3n9vfrA',
      message: 'Hows it going?',
    },
    {
      message: 'Hi, How are you Jeff?',
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH JEFF ON 09/11/20</p>
      {messages.map(message =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              src={message.image}
              alt={message.name}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='Type a message...'
          type='text'
        />
        <button
          onClick={handleSend}
          type='submit'
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
