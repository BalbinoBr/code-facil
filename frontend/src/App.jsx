export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="h-14 flex items-center px-6 border-b border-gray-700">
        <h1 className="text-lg font-semibold">Code Fácil</h1>
      </header>

      {/* Main */}
      <main className="flex flex-1 overflow-hidden">
        {/* Chat */}
        <aside className="w-1/3 max-w-sm border-r border-gray-700 flex flex-col">
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            <div className="bg-gray-800 p-3 rounded-lg">Olá 👋 Como posso ajudar?</div>
            <div className="bg-blue-600 p-3 rounded-lg self-end">Quero criar um serviço</div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <input
              placeholder="Digite sua mensagem..."
              className="w-full p-2 rounded bg-gray-800 outline-none"
            />
          </div>
        </aside>

        {/* Workspace */}
        <section className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Área de Trabalho</h2>
          <div className="bg-gray-800 p-6 rounded-lg h-full">
            <p className="text-gray-300">
              Aqui aparecerão formulários, resultados, relatórios ou execuções
              conforme o chat avança.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
