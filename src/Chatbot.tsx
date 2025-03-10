import React, { useState, useEffect } from 'react';

interface ChatbotProps {
  apiBase: string;
}

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ apiBase }) => {
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem("chatbot_api_key") || "");
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (!apiKey) {
      alert("請先設定 API Key！");
    }
  }, [apiKey]);

  const addMessage = (text: string, isUser: boolean = false) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text, isUser }
    ]);
  };

  const handleSetApiKey = () => {
    const key = prompt("請輸入您的 API Key：", apiKey);
    if (key) {
      setApiKey(key);
      localStorage.setItem("chatbot_api_key", key);
      alert("API Key 設定成功！");
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !apiKey) return;
    addMessage(message, true);
    setMessage("");

    try {
      const response = await fetch(`${apiBase}/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      addMessage(data.reply || "🤖 無法獲取回應");
    } catch (error) {
      addMessage("❌ API 錯誤，請稍後再試");
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, width: 300, height: 400, background: "white", borderRadius: 10, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <button 
        style={{ padding: 5, background: "#007BFF", color: "white", border: "none", cursor: "pointer", textAlign: "center", width: "100%" }}
        onClick={handleSetApiKey}>
        🔑 設定 API Key
      </button>

      <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
        {chatMessages.map((msg, index) => (
          <div 
            key={index}
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 5,
              maxWidth: "80%",
              alignSelf: msg.isUser ? "flex-end" : "flex-start",
              background: msg.isUser ? "#007BFF" : "#f1f1f1",
              color: msg.isUser ? "white" : "black",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", borderTop: "1px solid #ddd", padding: 5 }}>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="輸入訊息..." 
          style={{ flex: 1, padding: 5, border: "none" }} 
        />
        <button 
          onClick={handleSendMessage}
          style={{ padding: 5, background: "blue", color: "white", border: "none", cursor: "pointer" }}
        >
          發送
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
