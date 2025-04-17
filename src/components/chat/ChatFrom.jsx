import React, { useRef } from "react";

const ChatFrom = ({ setChatHistory }) => {
  const inputRef = useRef();
  const handleFormSumbit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    console.log(userMessage);
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "thinking..." },
        ]),
      600
    );
  };
  return (
    <form className="chat-form" onSubmit={handleFormSumbit}>
      <input
        ref={inputRef}
        type="text"
        className="message-input"
        placeholder="حاجة واقف معاك اسأل هنا!!"
        required
      />
      <button className="material-symbols-rounded" type="submit"></button>
    </form>
  );
};

export default ChatFrom;
