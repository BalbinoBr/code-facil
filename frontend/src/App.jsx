import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Como posso te ajudar com código hoje?', sender: 'ai' },
    { id: 2, text: 'Preciso de uma função em JavaScript', sender: 'user' }
  ]);
  
  const [code, setCode] = useState(`// Seu código aparecerá aqui\nfunction exemplo() {\n  return "Hello, World!";\n}`);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simular resposta da IA
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        text: `Entendi: "${input}". Aqui está uma solução:`, 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Atualizar código com exemplo
      setCode(`// Resposta para: ${input}\nfunction solucao() {\n  // Código gerado automaticamente\n  console.log("Problema resolvido!");\n  return true;\n}`);
    }, 1000);
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">🤖</div>
          <span>CodeFacil AI</span>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => {
            setMessages([{ id: 1, text: 'Chat reiniciado! Como posso ajudar?', sender: 'ai' }]);
            setCode('// Novo workspace\n// Digite seu código aqui');
          }}>
            Novo Chat
          </button>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
            onClick={() => navigator.clipboard.writeText(code)}>
            📋 Copiar Código
          </button>
        </div>
      </header>
      
      {/* MAIN CONTAINER */}
      <div className="main-container">
        {/* CHAT SIDEBAR */}
        <div className="chat-sidebar">
          <div className="chat-header">
            <h2><span>💬</span> Assistente de Código</h2>
            <span style={{ color: '#10b981', fontSize: '0.85rem' }}>● Online</span>
          </div>
          
          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              placeholder="Pergunte sobre código, APIs, frameworks..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>
              Enviar
            </button>
          </div>
        </div>
        
        {/* CODE WORKSPACE */}
        <div className="code-workspace">
          <div className="workspace-header">
            <h2>📁 Workspace</h2>
            <button className="btn btn-primary" onClick={() => alert('Código executado! Confira o console.')}>
              ▶️ Executar Código
            </button>
          </div>
          
          <div className="code-tabs">
            {['JavaScript', 'React', 'API'].map(tab => (
              <button key={tab} className={`code-tab ${tab === 'JavaScript' ? 'active' : ''}`}>
                {tab === 'JavaScript' ? '📘' : tab === 'React' ? '⚛️' : '🔧'} {tab}
              </button>
            ))}
          </div>
          
          <div className="code-editor">
            <div className="editor-header">
              <span>index.js</span>
              <button style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer' }}
                onClick={() => navigator.clipboard.writeText(code)}>
                💾 Salvar
              </button>
            </div>
            
            <div className="editor-content">
              <pre contentEditable suppressContentEditableWarning 
                onBlur={(e) => setCode(e.target.textContent)}
                style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
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
              {`$ node index.js\n"Hello, World!"\n✅ Código executado com sucesso!`}
            </pre>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="status">
          <div className="status-dot"></div>
          <span>Sistema operacional</span>
        </div>
        <div className="footer-info">
          <span>CodeFacil AI v1.0 • </span>
          <span style={{ color: '#6366f1' }}>API: /api</span>
        </div>
        <div className="footer-actions">
          <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}
            onClick={() => alert('Configurações em breve!')}>
            ⚙️ Configurações
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
