import React, { useState } from "react";
import ChatPotIcon from "./ChatPotIcon";
import ChatFrom from "./ChatFrom";
import ChatMessage from "./ChatMessage";

const ChatWrapper = () => {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="container-chat">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="headerInfo">
            <ChatPotIcon />
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatPotIcon />
            <p className="message-text">hello</p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <ChatFrom setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default ChatWrapper;
