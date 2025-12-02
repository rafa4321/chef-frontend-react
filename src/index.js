import React from 'react';
// ⚠️ IMPORTACIÓN CLAVE: Usamos 'createRoot' de 'client'
import { createRoot } from 'react-dom/client'; 
import './index.css'; 
import App from './App'; // Importa tu componente principal
import reportWebVitals from './reportWebVitals';

// 1. Encuentra el contenedor de montaje (el div id="root" en index.html)
const container = document.getElementById('root');

// 2. Crea la raíz de React 18
const root = createRoot(container); 

// 3. Renderiza la aplicación en el nuevo método 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
