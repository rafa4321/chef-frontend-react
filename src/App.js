import React from 'react';
import Navbar from './Navbar'; 

// Ya no es necesario importar './App.css'; 
// El código de React es limpio y modular.

function App() {
  return (
    <div className="App">
      
      {/* 1. Barra de Navegación (Navbar) */}
      <Navbar /> 
      
      {/* 2. Contenido Principal */}
      <main style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        
        <h2>¡Tu Aplicación de Chef Está en Render.com!</h2>
        
        <p>
          El frontend (React) está listo para conectarse a tu backend (Express).
          Ahora podemos empezar a añadir el componente de lista de recetas.
        </p>
        
      </main>
      
    </div>
  );
}

export default App;
