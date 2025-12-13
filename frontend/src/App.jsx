import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function App() {
  const [tab, setTab] = useState("code");
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial;
        background: #0f172a;
        color: white;
        padding: 20px;
      }
      h1 { color: #38bdf8; }
    </style>
  </head>
  <body>
    <h1>Hello Code Fácil 🚀</h1>
    <p>Edite o código e veja o preview.</p>
  </body>
</html>`);

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
            <Editor
              height="100%"
              defaultLanguage="html"
              value={code}
              onChange={value => setCode(value)}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false }
              }}
            />
          ) : (
            <iframe
              title="preview"
              style={styles.preview}
              srcDoc={code}
            />
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
    padding: "10px 12px",
    borderRadius: "10px",
    maxWidth: "85%",
    fontSize: "14px"
  },

  chatInput: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #1f2937",
    gap: "6px"
  },

  input: {
    flex: 1,
    background: "#020617",
    border: "1px solid #1f2937",
    color: "white",
    padding: "8px",
    borderRadius: "6px"
  },

  sendBtn: {
    background: "#2563eb",
    border: "none",
    color: "white",
    padding: "0 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  workspace: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid #1f2937"
  },

  tab: {
    padding: "10px 16px",
    background: "transparent",
    color: "#9ca3af",
    border: "none",
    cursor: "pointer"
  },

  tabActive: {
    padding: "10px 16px",
    background: "#020617",
    color: "white",
    borderBottom: "2px solid #38bdf8",
    cursor: "pointer"
  },

  editor: {
    flex: 1
  },

  preview: {
    width: "100%",
    height: "100%",
    border: "none",
    background: "white"
  }
};
