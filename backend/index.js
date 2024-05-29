const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const RouterReportes = require("./src/routes/Reportes.routes")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/chatbot").then(client => {
  console.log('Conexión a MongoDB establecida correctamente');
})
.catch(error => console.error('Error al conectar a MongoDB:', error));

app.use("/reportes/",RouterReportes);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000,()=>console.log("Servidor en el puerto " + 5000))