import React from 'react';

// HEADER
export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">🤖</div>
        <span>CodeFacil AI</span>
      </div>
      <div className="header-actions">
        <button className="btn btn-primary">Novo Chat</button>
        <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
          Exportar Código
        </button>
      </div>
    </header>
  );
}

// CHAT SIDEBAR
export function ChatSidebar({ messages, onSendMessage }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-sidebar">
      <div className="chat-header">
        <h2>
          <span>💬</span>
          Assistente de Código
        </h2>
        <span style={{ color: '#10b981', fontSize: '0.85rem' }}>
          ● Online
        </span>
      </div>
      
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pergunte sobre código, APIs, frameworks..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

// CODE WORKSPACE
export function CodeWorkspace({ code, onCodeChange }) {
  const [activeTab, setActiveTab] = React.useState('javascript');
  
  const tabs = [
    { id: 'javascript', name: 'JavaScript', icon: '📘' },
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'api', name: 'API', icon: '🔧' }
  ];

  const runCode = () => {
    alert('Executando código... (em produção isso rodaria de verdade)');
  };

  return (
    <div className="code-workspace">
      <div className="workspace-header">
        <h2>📁 Workspace</h2>
        <button className="btn btn-primary" onClick={runCode}>
          ▶️ Executar Código
        </button>
      </div>
      
      <div className="code-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`code-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>
      
      <div className="code-editor">
        <div className="editor-header">
          <span>index.js</span>
          <div className="editor-actions">
            <button style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer' }}>
              💾 Salvar
            </button>
          </div>
        </div>
        
        <div className="editor-content">
          <pre contentEditable suppressContentEditableWarning onBlur={(e) => onCodeChange(e.target.textContent)}>
            {code}
          </pre>
        </div>
      </div>
      
      <div className="code-output">
        <div className="output-header">
          <span>📤</span>
          <h3>Saída do Console</h3>
        </div>
        <pre style={{ color: '#10b981' }}>
          $ node index.js<br/>
          "Hello, World!"<br/>
          ✅ Código executado com sucesso!
        </pre>
      </div>
    </div>
  );
}

// FOOTER
export function Footer() {
  return (
    <footer className="footer">
      <div className="status">
        <div className="status-dot"></div>
        <span>Sistema operacional</span>
      </div>
      <div className="footer-info">
        <span>CodeFacil AI v1.0 • </span>
        <span style={{ color: '#6366f1' }}>backend: api/code-facil.vercel.app</span>
      </div>
      <div className="footer-actions">
        <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
          ⚙️ Configurações
        </button>
      </div>
    </footer>
  );
}
