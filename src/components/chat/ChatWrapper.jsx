import React, { useEffect, useRef, useState } from "react";
import ChatPotIcon from "./ChatPotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import logo from "../../assets/gemini.png";

const ChatWrapper = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const bodyRef = useRef();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const generatePotResponse = async (history) => {  
    // Format history for Gemini API, keeping only the last 3 messages for context
    const recentHistory = history.slice(-3);
    const formattedHistory = recentHistory.map(({ role, text }) => ({
      role: role === "user" ? "user" : "model",
      parts: [{ text }]
    }));

    // Ensure we have a user message
    if (formattedHistory.length === 0 || formattedHistory[formattedHistory.length - 1].role !== "user") {
      formattedHistory.push({
        role: "user",
        parts: [{ text: "Please respond to my previous message" }]
      });
    }

    console.log('Sending to API:', formattedHistory);

    const requestOptions = {  
      method: "POST",  
      headers: {  
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({
        contents: formattedHistory,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),  
    };  

    try {  
      const url = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}`;
      console.log('Fetching from:', url);
      
      const response = await fetch(url, requestOptions);  
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Full Response data:', JSON.stringify(data, null, 2));
      
      if (data.candidates && data.candidates[0]?.content) {
        const modelResponse = data.candidates[0].content;
        const responseText = modelResponse.parts?.[0]?.text;
        
        if (!responseText) {
          console.warn('Empty response received from API');
          // If we get an empty response, try again with just the last message
          if (history.length > 1) {
            return generatePotResponse([history[history.length - 1]]);
          }
          setChatHistory(prev => [...prev, { 
            role: "model", 
            text: "I'm having trouble generating a response. Could you please rephrase your question?" 
          }]);
        } else {
          setChatHistory(prev => [...prev, { 
            role: "model", 
            text: responseText
          }]);
        }
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error) {  
      console.error("Error fetching data:", error);  
      setChatHistory(prev => [...prev, { 
        role: "model", 
        text: "Sorry, I encountered an error processing your request. Please try again." 
      }]);
    }  
  }; 

  useEffect(() => {  
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });  
    }
  }, [chatHistory]);  

  

  return (
    <>
  
  <div class="image-container"  onClick={toggleChat}>  
    <img src={logo} alt="gemini icon" className="img-logo" />  
    <div class="hover-text">تحدث مع الذكاء الاصطناعي</div>  
</div>  
    
    <div className={`parent ${isOpen ? 'show' : ''}`} dir="ltr">
  <div className={`container-chat`}>
    
    <div className={`chatbot-popup `}>
      <div className="chat-header">
        <div className="headerInfo">
          <ChatPotIcon classA={"SVG"} />
        </div>
          {/* <div className="toggle" onClick={toggleChat}>close AI</div> */}
        <button className="material-symbols-rounded" onClick={toggleChat}>keyboard_arrow_down</button>
      </div>
      <div ref={bodyRef} className="chat-body">
        <div className="message bot-message">
          <ChatPotIcon classA={"svg"} />
          <p className="message-text">hello</p>
        </div>
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
      </div>
      <div className="chat-footer">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generatePotResponse={generatePotResponse}
        />
      </div>
    </div>
  </div>
    </div>
    </>
    

  
  );
};

export default ChatWrapper;  