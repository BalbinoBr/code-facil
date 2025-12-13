import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "system", text: "Olá 👋 Sou o Facil Code. No que posso ajudar?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { from: "user", text: input },
      {
        from: "system",
        text: "Mensagem recebida. Em breve vou executar ações aqui 👉"
      }
    ]);

    setInput("");
  }

  return (
    <div style={styles.page}>
      {/* LADO ESQUERDO - CHAT */}
      <div style={styles.chat}>
        <div style={styles.chatHeader}>💬 Facil Chat</div>

        <div style={styles.chatBody}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                background:
                  msg.from === "user" ? "#4f46e5" : "#1f2933",
                color: "#fff"
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div style={styles.chatInput}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua solicitação..."
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={styles.button}>
            Enviar
          </button>
        </div>
      </div>

      {/* LADO DIREITO - WORKSPACE */}
      <div style={styles.workspace}>
        <h1 style={styles.title}>🧠 Área de Trabalho</h1>
        <p style={styles.subtitle}>
          Aqui aparecerão ações, códigos, respostas e automações geradas pelo
          sistema.
        </p>

        <div style={styles.card}>
          <strong>Status:</strong> Sistema online ✅
        </div>

        <div style={styles.card}>
          <strong>Próximo passo:</strong> Conectar backend e interpretar comandos
          do chat.
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    display: "flex",
    height: "100vh",
    fontFamily: "Inter, system-ui, sans-serif",
    background: "#0f172a",
    color: "#e5e7eb"
  },

  chat: {
    width: "35%",
    minWidth: 320,
    display: "flex",
    flexDirection: "column",
    background: "#020617",
    borderRight: "1px solid #1e293b"
  },

  chatHeader: {
    padding: "16px",
    fontWeight: "bold",
    fontSize: "18px",
    background: "#020617",
    borderBottom: "1px solid #1e293b"
  },

  chatBody: {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflowY: "auto"
  },

  message: {
    maxWidth: "80%",
    padding: "12px 14px",
    borderRadius: "12px",
    fontSize: "14px"
  },

  chatInput: {
    display: "flex",
    gap: "8px",
    padding: "12px",
    borderTop: "1px solid #1e293b"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none"
  },

  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer"
  },

  workspace: {
    flex: 1,
    padding: "32px",
    background: "linear-gradient(180deg, #0f172a, #020617)"
  },

  title: {
    fontSize: "28px",
    marginBottom: "8px"
  },

  subtitle: {
    opacity: 0.8,
    marginBottom: "24px"
  },

  card: {
    background: "#020617",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "12px",
    border: "1px solid #1e293b"
  }
};
