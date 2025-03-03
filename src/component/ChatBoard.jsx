import React, { useState, useRef, useEffect } from "react";
import "./styles/ChatBoard.css";

import divider from './Assets/divider.png';
import backarrow from './Assets/backarrow.png';
import send from './Assets/send.png';

import plusIcon from "./Assets/plus_send.png";
import textIcon from "./Assets/text.png";
import emojiIcon from "./Assets/emoji.png";
import mentionIcon from "./Assets/mention.png";
import videoIcon from "./Assets/video_icon.png";
import micIcon from "./Assets/microphone.png";
import editIcon from "./Assets/slash_icon.png";
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

    setMessages([...messages, { sender: " ", text: currentMessage }]);
    setCurrentMessage("");
  };

  const toolbarItems = [
    { id: 1, icon: plusIcon, alt: "Plus", action: () => alert("Plus Clicked") },
    { id: 2, icon: textIcon, alt: "Text Format", action: () => alert("Text Format Clicked") },
    { id: 3, icon: emojiIcon, alt: "Emoji", action: () => alert("Emoji Clicked") },
    { id: 4, icon: mentionIcon, alt: "Mention", action: () => alert("@ Mention Clicked") },
    { id: 5, type: "divider" }, 
    { id: 6, icon: videoIcon, alt: "Video", action: () => alert("Video Clicked") },
    { id: 7, icon: micIcon, alt: "Microphone", action: () => alert("Microphone Clicked") },
    { id: 8, type: "divider" }, 
    { id: 9, icon: editIcon, alt: "Edit", action: () => alert("Edit Clicked") },
  ];

  return (
    <div className="chat-container">
          <div className="chat-body">
          <chat-header/>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === "  " ? "sent" : "received"}`}>
            <strong>{msg.sender}</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="chat-input-section">
        <div>
        <textarea
          className="chat-input"
          placeholder="Write Something here"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </div>
        <div className="submit">
        <div className="toolbar">
      {toolbarItems.map((item) =>
        item.type === "divider" ? (
          <div key={item.id} className="divider"></div>
        ) : (
          <button key={item.id} className="toolbar-btn" onClick={item.action}>
            <img src={item.icon} alt={item.alt} className="toolbar-icon" />
          </button>
        )
      )}
    </div>
        <button type="submit" className="send-button">
         <img src={send} alt=" " className="send-icon" />
          <img src={divider} alt=" " className="divider" />
          <img src={ backarrow } alt=" " className=" backarrow" />
        </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBoard;
