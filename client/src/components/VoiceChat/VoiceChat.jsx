// VoiceAssistant.js
import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import annyang from 'annyang';
import './VoiceChat.css'; 

const VoiceChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    annyang.addCallback('result', (userSaid) => {
      const newMessages = [...messages, { text: userSaid[0], from: 'user' }];
      setMessages(newMessages);
    });

    annyang.start();

    return () => {
      annyang.abort();
    };
  }, [messages]);

  return (
    <div className="voice-assistant-container">
      <h1>Voice Assistant</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from}`}>
            {message.from === 'user' ? (
              <div className="user-message">{message.text}</div>
            ) : (
              <div className="assistant-message">
                <FaRobot />
                {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceChat;
