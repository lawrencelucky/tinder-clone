import React from 'react';

import './Chats.css';

import Chat from './Chat';

const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name='Jeff'
        message='Hey! how are you 😉'
        timestamp='35 minutes ago'
        profilePic='https://bit.ly/3n9vfrA'
      />

      <Chat
        name='Mark'
        message='Whats up ❤?'
        timestamp='55 minutes ago'
        profilePic='https://bit.ly/3lhfCxx'
      />

      <Chat
        name='Richie'
        message='Hola!'
        timestamp='3 days ago'
        profilePic='https://bit.ly/3eFL85S'
      />

      <Chat
        name='Erlich'
        message='Ooops there he is... 🐐'
        timestamp='1 week ago'
        profilePic='https://bit.ly/36dzvPO'
      />
    </div>
  );
};

export default Chats;
