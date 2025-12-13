import React, { useState } from 'react';
import './App.css';
import ChatSidebar from './components/ChatSidebar';
import CodeWorkspace from './components/CodeWorkspace';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Como posso te ajudar com código hoje?', sender: 'ai' },
    { id: 2, text: 'Preciso de uma função em JavaScript', sender: 'user' }
  ]);
  
  const [code, setCode] = useState(`// Seu código aparecerá aqui\nfunction exemplo() {\n  return "Hello, World!";\n}`);

  return (
    <div className="app">
      <Header />
      
      <div className="main-container">
        <ChatSidebar 
          messages={messages}
          onSendMessage={(text) => {
            setMessages([...messages, { id: Date.now(), text, sender: 'user' }]);
            // Simular resposta da IA após 1s
            setTimeout(() => {
              setMessages(prev => [...prev, { 
                id: Date.now(), 
                text: 'Aqui está uma solução para você:', 
                sender: 'ai' 
              }]);
              setCode(`// Resposta da IA\nexport default function solution() {\n  // Código gerado automaticamente\n  console.log("Código funcionando!");\n}`);
            }, 1000);
          }}
        />
        
        <CodeWorkspace 
          code={code}
          onCodeChange={setCode}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
