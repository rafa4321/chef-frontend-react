// Dependencias necesarias (asegúrate de que estén en package.json)
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Gemini: Usará la clave de API de la variable de entorno
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = "gemini-1.5-flash"; // El modelo que elegiste

// Middleware
// Habilitar CORS para que el Frontend de Netlify pueda comunicarse
// Recomendación: Limitar esto solo a tu URL de Netlify si es posible.
app.use(cors()); 
app.use(express.json()); // Permite a Express leer el cuerpo de las solicitudes JSON

// Endpoint del chat
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "El campo 'message' es obligatorio." });
    }

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: [{ role: "user", parts: [{ text: message }] }],
            config: {
                // System Instruction (adaptado del HTML original)
                systemInstruction: "Eres un chef experto llamado Sabor Expres. Responde solo sobre cocina, recetas y alimentos. Sé amable y usa emojis y habla siempre en español."
            }
        });

        const reply = response.text;
        
        // Devolver la respuesta al Frontend de React
        res.json({ reply });

    } catch (error) {
        console.error('Error en la API de Gemini:', error);
        res.status(500).json({ 
            error: "Error interno del servidor. La clave API o el servicio Gemini falló." 
        });
    }
});

// Ruta de prueba (opcional)
app.get('/', (req, res) => {
    res.send('El servidor Sabor Expres está funcionando. Usa el endpoint /api/chat (POST) para comunicarte.');
});

app.listen(PORT, () => {
    console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});