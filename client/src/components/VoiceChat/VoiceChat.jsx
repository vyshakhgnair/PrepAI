import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import annyang from 'annyang';
import './VoiceChat.css'; 

const VoiceChat = () => {
  const [messages, setMessages] = useState([{ text: 'Hello! Can you tell me about yourself?', from: 'assistant' }]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    annyang.addCallback('result', (userSaid) => {
      const newMessages = [...messages, { text: userSaid[0], from: 'user' }];
      setMessages(newMessages);

      // Generate a response
      const response = generateResponse(userSaid[0]);
      const responseMessage = { text: response, from: 'assistant' };
      setMessages(prevMessages => [...prevMessages, responseMessage]);

      // Speak the response
      speak(response);
    });

    annyang.start();

    return () => {
      annyang.abort();
    };
  }, [messages]);

  const generateResponse = (userInput) => {
    let response = '';
    switch(stage) {
      case 0:
        response = 'Interesting. So we can start the tech question.';
        setStage(1);
        break;
      case 1:
        response = fetchQuestionFromDatabase(); // Fetch a question from your database
        setStage(2);
        break;
      case 2:
        response = 'Can you elaborate on that?';
        setStage(3);
        break;
      default:
        response = 'Can you elaborate on that?';
    }
    return response;
  };
  

  const fetchQuestionFromDatabase = () => {
    // Fetch a question from your database here
    // This is just a placeholder
    return 'What is your favorite programming language?';
  };

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
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
