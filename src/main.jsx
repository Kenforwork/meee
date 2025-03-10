import ReactDOM from "react-dom";
import Chatbot from "./Chatbot";

window.ChatbotSDK = {
  init: () => {
    const chatbotDiv = document.createElement("div");
    document.body.appendChild(chatbotDiv);
    ReactDOM.render(<Chatbot />, chatbotDiv);
  },
};
