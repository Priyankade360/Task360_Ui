import React, { useState, useRef, useEffect } from "react";
import "./ChatBoard.css";

const ChatBoard = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === "") return;

    setMessages([...messages, { sender: "You", text: currentMessage }]);
    setCurrentMessage("");
  };

  return (
    <div className="chat-container">
      {/* <div className="chat-header">Chat Header</div> */}
          <div className="chat-body">
          <chat-header/>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === "You" ? "sent" : "received"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="chat-input-section">
        <textarea
          className="chat-input"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatBoard;
