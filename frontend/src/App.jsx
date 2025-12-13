import { useState } from "react";
import "./styles.css";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá! Como posso te ajudar a criar hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input }
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.reply }
    ]);

    setLoading(false);
  }

  return (
    <div className="layout">
      <aside className="chat">
        <div className="messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              {m.content}
            </div>
          ))}
          {loading && <div className="msg assistant">Pensando...</div>}
        </div>

        <div className="input">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Digite seu pedido..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </aside>

      <main className="editor">
        <h2>Área de Código / Preview</h2>
        <p>Em breve: editor + renderização</p>
      </main>
    </div>
  );
}
