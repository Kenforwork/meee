import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/Chatbot.tsx", // 輸入文件是 Chatbot.js
      name: "Chatbot",
      fileName: (format) => `chatbot.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 設置外部依賴
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
