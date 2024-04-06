import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import annyang from 'annyang';
import './VoiceChat.css'; 

const VoiceChat = () => {
  const [messages, setMessages] = useState([{ text: 'Hello! Can you tell me about yourself?', from: 'assistant' }]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    console.log('Starting useeffect');
    annyang.addCallback('result', async (userSaid) => {
      console.log("🚀 ~ annyang.addCallback ~ userSaid:", userSaid)

      const userMessage = userSaid[0];
      // console.log("🚀 ~ annyang.addCallback ~ userMe̥ssage:", userMe̥ssage)
      const newMessages = [...messages, { text: userMessage, from: 'user' }];
      setMessages(newMessages);
      
      // Generate a response
      const response = await generateResponse(userMessage);
      
      
      const responseMessage = { text: response, from: 'assistant' };
      // console.log(responseMessage);

      // Update the state with the new message
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    });

    annyang.start();

    return () => {
      annyang.abort();
    };
  }, [messages]);

  const generateResponse = async (userInput) => {
    console.log('Starting annyang');
    let response = '';
    switch(stage) {
      case 0:
        response = 'Interesting. So we can start the tech question.';
        setStage(1);
        break;
      case 1:
        try {
          const question = await fetchQuestionFromDatabase(); // Fetch a question from your database
          response = question;
          setStage(1); // Move to the next stage after fetching the question
        } catch (err) {
          console.error(err);
          response = 'An error occurred while fetching the question.';
        }
        break;
      default:
        response = 'Can you elaborate on that?';
    }
    return response;
  };

  const fetchQuestionFromDatabase = async () => {
    try {
      const response = await fetch('http://localhost:3001/Technical/T1001');
      const data = await response.json();
      return data.t_ques; // Return the question
    } catch (err) {
      console.error(err);
      throw new Error('An error occurred while fetching the question.');
    }
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