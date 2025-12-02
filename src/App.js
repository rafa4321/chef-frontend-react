import React, { useState } from 'react';
import './App.css'; 

// *************************************************************
// *** ⚠️ VALOR CRÍTICO: REEMPLAZA CON TU URL DE RENDER.COM ⚠️ ***
// *************************************************************
// Ejemplo: "https://sabor-expres-backend-abcdef.onrender.com"
const BACKEND_URL = "https://[TU-URL-DE-RENDER].onrender.com"; 
// *************************************************************

function App() {
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy Sabor Expres. 🍳 ¿Qué cocinamos hoy?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const agregarMensaje = (text, sender) => {
    setMessages(prevMessages => [...prevMessages, { text, sender }]);
  };

  const enviarMensaje = async (e) => {
    e.preventDefault();
    const texto = input.trim();
    if (!texto || isLoading) return;

    agregarMensaje(texto, 'user');
    setInput('');
    setIsLoading(true);

    try {
      // LLAMADA AL BACKEND SEGURO EN RENDER
      const response = await fetch(`${BACKEND_URL}/api/chat`, { // <-- Esta es la ruta /api/chat
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: texto })
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);
      
      // Formateo básico (adaptado del HTML original)
      let respuestaFormateada = data.reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
      agregarMensaje(respuestaFormateada, 'bot');

    } catch (error) {
      console.error("Error al conectar con el Chef:", error);
      // Mensaje de error para el usuario si falla la conexión
      agregarMensaje("⚠️ Error: No se pudo conectar con el Chef. Revisa la URL del Backend o la clave API en Render.com.", 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  const limpiarChat = () => {
    setMessages([{ text: "¡Chat limpio! ¿Qué más necesitas?", sender: 'bot' }]);
  };

  return (
    // Se usa el nombre de clase 'chat-container' para aplicar los estilos del CSS
    <div className="chat-container w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="header bg-red-800 p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2">
                <span className="text-2xl">👨‍🍳</span>
                <h1 className="text-white font-bold text-xl">Sabor Expres</h1>
            </div>
            <button onClick={limpiarChat} className="clear-btn text-red-200 hover:text-white text-sm bg-red-900/30 px-3 py-1 rounded-full">Limpiar</button>
        </div>

        <div className="chat-box flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
                <div key={index} className={`message-row flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {/* Se usa dangerouslySetInnerHTML para renderizar el HTML (negritas, saltos de línea) */}
                    <div className={`message-bubble p-3 max-w-[85%] shadow-sm ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`} 
                         dangerouslySetInnerHTML={{ __html: msg.text }}>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="loading-row px-6 py-2">
                    <div className="flex space-x-1">
                        <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>

        <form onSubmit={enviarMensaje} className="input-form p-4 bg-white border-t border-gray-200 flex space-x-2">
            <input 
                id="user-input"
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ej: Receta de arepas..." 
                disabled={isLoading}
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="bg-red-800 text-white p-3 rounded-full hover:bg-red-900 transition-colors">
                 {/* Ícono de enviar (SVG adaptado) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
        </form>
    </div>
  );
}

export default App;