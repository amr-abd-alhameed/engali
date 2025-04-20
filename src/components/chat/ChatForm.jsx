// import React, { useRef } from "react";

// const ChatForm = ({chatHistory , setChatHistory , generatePotResponse}) => {
//   const inputRef = useRef();
//   // const handleFormSubmit = (e) => {
//   //   e.preventDefault();
//   //   const userMessage = inputRef.current.value.trim();
//   //   if (!userMessage) return;
//   //   console.log(userMessage);
//   //   setChatHistory((history) => [
//   //     ...history,
//   //     { role: "user", text: userMessage },
//   //   ]);
//   //   inputRef.current.value = ''; // Clear the input after submission
//   //   setTimeout(
//   //     () =>{
//   //       setChatHistory((history) => [
//   //         ...history,
//   //         { role: "model", text: "thinking..." },
//   //       ]);
//   //       generatePotResponse([...chatHistory, { role: "user", text: userMessage }]);

//   //      }, 600
//   //   );
//   // };
//   // const handleFormSubmit = (e) => {  
//   //   e.preventDefault();  
//   //   const userMessage = inputRef.current.value.trim();  
//   //   if (!userMessage) return;  
//   //   console.log(userMessage);  
    
//   //   // Add user's message to chat history  
//   //   setChatHistory((prevHistory) => {  
//   //     const updatedHistory = [  
//   //       ...prevHistory,  
//   //       { role: "user", text: userMessage },  
//   //     ];  
      
//   //     // Clear the input immediately after submission  
//   //     inputRef.current.value = "";   
    
//   //     // Show "thinking..." message  
//   //     setTimeout(() => {  
//   //       setChatHistory((history) => [  
//   //         ...history,  
//   //         { role: "model", text: "thinking..." },  
//   //       ]);  
        
//   //       // Pass the updated history to `generatePotResponse`  
//   //       generatePotResponse(updatedHistory);  
//   //     }, 600);  
      
//   //     // Return the updated history  
//   //     return updatedHistory;  
//   //   });  
//   // };  

//   const handleFormSubmit = (e) => {  
//     e.preventDefault();  
//     const userMessage = inputRef.current.value.trim();  
//     if (!userMessage) return;  
//     console.log(userMessage);  
    
//     // Immediately clear the input to avoid UI glitches  
//     inputRef.current.value = "";   
  
//     // Add user's message to chat history and update the history  
//     setChatHistory((prevHistory) => {  
//       const updatedHistory = [  
//         ...prevHistory,  
//         { role: "user", text: userMessage },  
//       ];  
  
//       // Show "thinking..." message  
//       setChatHistory((prev) => [  
//         ...prev,  
//         { role: "model", text: "thinking..." },  
//       ]);  
      
//       // Generate response after a delay  
//       setTimeout(() => {  
//         generatePotResponse(updatedHistory);  
//       }, 600);  
  
//       return updatedHistory; // Return the latest history  
//     });  
//   };  
//   return (
//     <form className="chat-form" onSubmit={handleFormSubmit}>
//       <input
//         ref={inputRef}
//         type="text"
//         className="message-input"
//         placeholder="حاجة واقف معاك اسأل هنا!!"
//         required
//       />
//       <button className="material-symbols-rounded" type="submit">send</button>
//     </form>
//   );
// };

// export default ChatForm;




import React, { useRef } from "react";  

const ChatForm = ({ chatHistory, setChatHistory, generatePotResponse }) => {  
  const inputRef = useRef();  
  
  const handleFormSubmit = (e) => {  
    e.preventDefault();  
    const userMessage = inputRef.current.value.trim();  
    if (!userMessage) return;  

    console.log("User message:", userMessage);  
    
    // Clear the input immediately  
    inputRef.current.value = "";  

    // Update chat history with user message and "thinking..." response  
    setChatHistory((prevHistory) => {  
      const updatedHistory = [  
        ...prevHistory,  
        { role: "user", text: userMessage },  
        { role: "model", text: "thinking..." },  
      ];  
      
      // Generate AI response after delay with updated history  
      setTimeout(() => {  
        generatePotResponse(updatedHistory);  
      }, 600);  

      return updatedHistory; // Return the updated history  
    });  
  };  

  return (  
    <form className="chat-form" onSubmit={handleFormSubmit}>  
      <input  
        ref={inputRef}  
        type="text"  
        className="message-input"  
        placeholder="حاجة واقف معاك اسأل هنا!!"  
        required  
      />  
      <button className="material-symbols-rounded" type="submit">send</button>  
    </form>  
  );  
};  

export default ChatForm;  