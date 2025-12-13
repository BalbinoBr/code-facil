import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("code");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Olá, eu sou o André. Como posso te ajudar hoje?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  }

  return (
    <div style={styles.app}>
      
      {/* CHAT */}
      <div style={styles.chat}>
        <div style={styles.chatHeader}>🤖 André • IA Developer</div>

        <div style={styles.chatMessages}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? "#2563eb" : "#1f2937"
              }}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div style={styles.chatInput}>
          <input
            style={styles.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Fale com o André..."
          />
          <button style={styles.sendBtn} onClick={sendMessage}>
            ➤
          </button>
        </div>
      </div>

      {/* WORKSPACE */}
      <div style={styles.workspace}>
        <div style={styles.tabs}>
          <button
            style={tab === "code" ? styles.tabActive : styles.tab}
            onClick={() => setTab("code")}
          >
            Código
          </button>
          <button
            style={tab === "preview" ? styles.tabActive : styles.tab}
            onClick={() => setTab("preview")}
          >
            Preview
          </button>
        </div>

        <div style={styles.editor}>
          {tab === "code" ? (
            <pre style={styles.code}>
{`function hello() {
  console.log("Hello, Code Fácil 🚀");
}`}
            </pre>
          ) : (
            <div style={styles.preview}>
              <h1>🚀 Preview</h1>
              <p>Resultado da aplicação aparecerá aqui.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "Inter, system-ui, sans-serif"
  },

  chat: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #1f2937",
    background: "#020617"
  },

  chatHeader: {
    padding: "16px",
    fontWeight: "600",
    borderBottom: "1px solid #1f2937"
  },

  chatMessages: {
    flex: 1,
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: "auto"
  },

  message: {
    padding:
