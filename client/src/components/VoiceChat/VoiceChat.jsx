import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import annyang from 'annyang';
import './VoiceChat.css'; 

const VoiceChat = () => {
  const [messages, setMessages] = useState([{ text: 'Hello! Can you tell me about yourself?', from: 'assistant' }]);

  useEffect(() => {
    annyang.addCallback('result', (userSaid) => {
      const newMessages = [...messages, { text: userSaid[0], from: 'user' }];
      setMessages(newMessages);

      // Generate a response
      const response = generateResponse(userSaid[0]);
      const responseMessage = { text: response, from: 'assistant' };
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    });

    annyang.start();

    return () => {
      annyang.abort();
    };
  }, [messages]);

  const generateResponse = (userInput) => {
    // Add your logic here to generate a response based on the user's input
    // For now, this just returns a default response
    
    return 'Can you elaborate on that?';
  };

  return (
    <div className="voice-assistant-container">
      <h1>Interview Bot</h1>
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