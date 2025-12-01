import React from 'react';
// Si tienes un archivo de estilos llamado App.css en la misma carpeta src/, descomenta la siguiente línea:
// import './App.css'; 

function App() {
  // Aquí es donde iría la lógica de tu aplicación:
  // - Rutas (si usas React Router)
  // - Estados (usando useState)
  // - Efectos secundarios (usando useEffect)
  
  const nombreApp = "Chef Frontend App";

  return (
    // La sintaxis dentro del return es JSX (HTML dentro de JavaScript)
    <div className="App">
      <header style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        <h1>{nombreApp}</h1>
        <p>¡Bienvenido a tu aplicación de recetas!</p>
      </header>
      
      <main style={{ padding: '20px' }}>
        {/* Aquí es donde insertarás tus otros componentes, como Navbar, Receta, etc. */}
        <h2>Contenido Principal de la Aplicación</h2>
        <p>Este contenido está siendo renderizado por el componente App.js.</p>
        
        {/* Ejemplo de cómo llamar a un componente que debes crear: */}
        {/* <ListaDeRecetas /> */}
      </main>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; {new Date().getFullYear()} {nombreApp}</p>
      </footer>
    </div>
  );
}

// Exporta el componente para que index.js pueda importarlo
export default App;