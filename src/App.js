import React from 'react';
import Navbar from './Navbar'; 

// Ya no es necesario importar './App.css'; 
// Usaremos estilos en línea o en componentes individuales como Navbar.js

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
        
        {/* Aquí irán otros componentes como RecipeList */}
        
      </main>
      
    </div>
  );
}

export default App;
