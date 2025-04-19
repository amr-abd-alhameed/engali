import React from "react";
import ChatPotIcon from "./ChatPotIcon";

const ChatMessage = ({ index, chat }) => {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {chat.role === "model" && <ChatPotIcon classA={"svg"} />}
      <p className="message-text">hello</p>
    </div>
  );
};

export default ChatMessage;
