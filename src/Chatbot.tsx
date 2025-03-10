import  { useState } from "react";
import "./index.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "你好，我是你的AI助理！", fromBot: true }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, fromBot: false }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "這是機器人的回覆：" + input, fromBot: true }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">Chatbot</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.fromBot ? "bot-message" : "user-message"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="輸入你的訊息..." />
        <button onClick={sendMessage}>送出</button>
      </div>
    </div>
  );
};

export default Chatbot;
