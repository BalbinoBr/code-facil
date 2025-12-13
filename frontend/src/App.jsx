import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá 👋 Me diga o que você quer construir." }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: "Gerando código..." }
    ]);
    setInput("");
  }

  return (
    <div style={styles.app}>
      {/* Sidebar / Chat */}
      <aside style={styles.sidebar}>
        <header style={styles.header}>
          <h2 style={styles.logo}>CodeFacil</h2>
          <span style={styles.badge}>AI Builder</span>
        </header>

        <div style={styles.chat}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                background:
                  msg.role === "user" ? "#2563eb" : "#020617"
              }}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div style={styles.inputBox}>
          <input
            style={styles.input}
            placeholder="Descreva o que você quer criar..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button style={styles.button} onClick={sendMessage}>
            →
          </button>
        </div>
      </aside>

      {/* Workspace */}
      <main style={styles.workspace}>
        <h1 style={styles.title}>Área de Trabalho</h1>

        <div style={styles.panel}>
          <p style={styles.placeholder}>
            O código gerado aparecerá aqui ✨
          </p>
        </div>
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
    fontFamily: "Inter, system-ui, sans-serif"
  },

  sidebar: {
    width: 360,
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #1e293b",
    background: "linear-gradient(180deg,#020617,#020617)"
  },

  header: {
    padding: "16px 20px",
    borderBottom: "1px solid #1e293b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  logo: {
    margin: 0,
    color: "#38bdf8"
  },

  badge: {
    background: "#1e293b",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12
  },

  chat: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    overflowY: "auto"
  },

  message: {
    maxWidth: "80%",
    padding: "10px 14px",
    borderRadius: 12,
    fontSize: 14,
    lineHeight: 1.4
  },

  inputBox: {
    padding: 16,
    display: "flex",
    gap: 8,
    borderTop: "1px solid #1e293b"
  },

  input: {
    flex: 1,
    padding: "10px 14px",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 10,
    color: "#e5e7eb",
    outline: "none"
  },

  button: {
    width: 42,
    borderRadius: 10,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontSize: 18
  },

  workspace: {
    flex: 1,
    padding: 32
  },

  title: {
    marginBottom: 16,
    fontWeight: 600
  },

  panel: {
    height: "calc(100% - 48px)",
    borderRadius: 12,
    border: "1px solid #1e293b",
    background: "#020617",
    padding: 20
  },

  placeholder: {
    color: "#64748b"
  }
};
