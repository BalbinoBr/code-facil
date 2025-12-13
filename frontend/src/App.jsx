import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá 👋 O que vamos construir hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [view, setView] = useState("code");

  const codeExample = `
function hello() {
  console.log("Olá, mundo!");
}

hello();
`;

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  }

  return (
    <div style={styles.app}>
      {/* CHAT */}
      <aside style={styles.sidebar}>
        <div style={styles.header}>
          <h2 style={{ color: "#38bdf8" }}>CodeFacil</h2>
          <span style={styles.badge}>AI</span>
        </div>

        <div style={styles.chat}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.msg,
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? "#2563eb" : "#020617"
              }}
            >
              {m.content}
            </div>
          ))}
        </div>

        <div style={styles.inputArea}>
          <input
            style={styles.input}
            placeholder="Descreva seu projeto..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button style={styles.send} onClick={sendMessage}>
            →
          </button>
        </div>
      </aside>

      {/* WORKSPACE */}
      <main style={styles.workspace}>
        <div style={styles.tabs}>
          <button
            style={view === "code" ? styles.tabActive : styles.tab}
            onClick={() => setView("code")}
          >
            Código
          </button>
          <button
            style={view === "preview" ? styles.tabActive : styles.tab}
            onClick={() => setView("preview")}
          >
            Preview
          </button>
        </div>

        {view === "code" ? (
          <pre style={styles.editor}>{codeExample}</pre>
        ) : (
          <iframe
            title="preview"
            style={styles.preview}
            srcDoc={`<h1 style="font-family:sans-serif;color:#2563eb">Olá mundo 👋</h1>`}
          />
        )}
      </main>
    </div>
  );
}

/* ===================== */
/* 🎨 ESTILOS */
/* ===================== */

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "Inter, system-ui"
  },

  sidebar: {
    width: 340,
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #1e293b"
  },

  header: {
    padding: 16,
    borderBottom: "1px solid #1e293b",
    display: "flex",
    justifyContent: "space-between"
  },

  badge: {
    background: "#1e293b",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12
  },

  chat: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    overflowY: "auto"
  },

  msg: {
    padding: "10px 14px",
    borderRadius: 12,
    maxWidth: "80%",
    fontSize: 14
  },

  inputArea: {
    padding: 16,
    display: "flex",
    gap: 8,
    borderTop: "1px solid #1e293b"
  },

  input: {
    flex: 1,
    padding: "10px 12px",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 8,
    color: "#e5e7eb"
  },

  send: {
    width: 40,
    background: "#2563eb",
    border: "none",
    color: "#fff",
    borderRadius: 8,
    cursor: "pointer"
  },

  workspace: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid #1e293b"
  },

  tab: {
    padding: "10px 16px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer"
  },

  tabActive: {
    padding: "10px 16px",
    background: "#020617",
    border: "none",
    borderBottom: "2px solid #2563eb",
    color: "#fff",
    cursor: "pointer"
  },

  editor: {
    flex: 1,
    margin: 0,
    padding: 20,
    background: "#020617",
    overflow: "auto"
  },

  preview: {
    flex: 1,
    border: "none",
    background: "#fff"
  }
};
