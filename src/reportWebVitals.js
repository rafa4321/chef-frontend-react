// src/reportWebVitals.js
// Este archivo es una utilidad estándar de Create React App para medir 
// el rendimiento de la aplicación (Core Web Vitals).

/**
 * Función que reporta las métricas de rendimiento web.
 * @param {function} onPerfEntry Función callback para manejar las métricas.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Importa dinámicamente el paquete 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
