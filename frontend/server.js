import express from "express"
import path from "path"
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta catch-all para manejar la navegación del frontend en una SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
