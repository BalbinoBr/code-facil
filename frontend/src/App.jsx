import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "system", text: "Olá 👋 Sou seu assistente de código." }
  ]);

  const [input, setInput] = useState("");
  const [view, setView] = useState("code");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  }

  return (
    <div style={styles.app}>
      {/* CHAT */}
      <div style={styles.chat}>
        <div style={styles.chatHeader}>💬 Chat</div>

        <div style={styles.chatBody}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                background:
                  m.from === "user" ? "#2563eb" : "#1f2937"
              }}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div style={styles.chatInput}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Digite sua pergunta..."
            style={styles.input}
          />
          <button onClick={sendMessage} style={styles.button}>
            Enviar
          </button>
        </div>
      </div>

      {/* WORKSPACE */}
      <div style={styles.workspace}>
        <div style={styles.workspaceHeader}>
          <button
            onClick={() => setView("code")}
            style={{
              ...styles.tab,
              background: view === "code" ? "#2563eb" : "#1f2937"
            }}
          >
            Código
          </button>
          <button
            onClick={() => setView("preview")}
            style={{
              ...styles.tab,
              background: view === "preview" ? "#2563eb" : "#1f2937"
            }}
          >
            Preview
          </button>
        </div>

        <div style={styles.workspaceBody}>
          {view === "code" ? (
            <pre style={styles.code}>
{`function helloWorld() {
  return "Seu código aparecerá aqui 🚀";
}`}
            </pre>
          ) : (
            <div style={styles.preview}>
              <h2>Preview</h2>
              <p>Aqui você verá o resultado do código.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "Inter, system-ui, sans-serif"
  },

  chat: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #1f2937"
  },

  chatHeader: {
    padding: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #1f2937"
  },

  chatBody: {
    flex: 1,
    padding: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto"
  },

  message: {
    padding: "10px 14px",
    borderRadius: "12px",
    maxWidth: "80%",
    fontSize: "14px"
  },

  chatInput: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #1f2937",
    gap: "8px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none"
  },

  button: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer"
  },

  workspace: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  workspaceHeader: {
    display: "flex",
    gap: "8px",
    padding: "10px",
    borderBottom: "1px solid #1f2937"
  },

  tab: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    cursor: "pointer"
  },

  workspaceBody: {
    flex: 1,
    padding: "20px"
  },

  code: {
    background: "#020617",
    padding: "20px",
    borderRadius: "12px",
    height: "100%",
    color: "#22c55e",
    fontSize: "14px"
  },

  preview: {
    background: "#020617",
    padding: "20px",
    borderRadius: "12px",
    height: "100%"
  }
};
