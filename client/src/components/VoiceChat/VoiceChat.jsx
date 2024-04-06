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
        const newMessages = [...messages, { text: userMessage, from: 'user' }];
      
        // Generate a response
        const response = await generateResponse(userMessage);
        
        const responseMessage = { text: response, from: 'assistant' };
        setMessages([...newMessages, responseMessage]); // Add both user and assistant messages at once
      });

    annyang.start();

    return () => {
      annyang.abort();
    };
  }, [messages]);

  const jaccardSimilarity = (str1, str2) => {
    const arr1 = str1.split(' ');
    const arr2 = str2.split(' ');
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
  };
  
  const generateResponse = async (userInput) => {
    let response = '';
    switch(stage) {
      case 0:
        response = 'Interesting. So we can start the tech question.';
        setStage(1);
        break;
      case 1:
        try {
          const { question, answer } = await fetchQuestionFromDatabase();
          const similarity = jaccardSimilarity(userInput, answer);
          console.log(`Similarity between user input and answer: ${similarity}`);
          response = question;
          setStage(1);
          
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
      console.log(data.t_ques,data.t_ans)
      return { question: data.t_ques, answer: data.t_ans };// Return the question
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