const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const RouterReportes = require("./src/routes/Reportes.routes")
const RouterAdmin = require("./src/routes/Admin.routes")
const cookieParser = require ("cookie-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}));


app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://chatfriend375:gXSgc7udvJiI6RDg@cluster0.pjzm68a.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0").then(client => {
  console.log('Conexión a MongoDB establecida correctamente');
})
.catch(error => console.error('Error al conectar a MongoDB:', error));

app.use("/reportes/",RouterReportes);   
app.use("/admin/",RouterAdmin);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000,()=>console.log("Servidor en el puerto " + 5000))

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
});

