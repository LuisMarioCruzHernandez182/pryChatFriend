const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const {WebhookClient} = require('dialogflow-fulfillment');


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


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/webhook', express.json() ,function (req, res) {
  const agent = new WebhookClient({ request:req, response:res });
 
  function welcome(agent) {
    agent.add("Welcome to my agent!");
  }
 
  function fallback(agent) {
    agent.add("I didn't understand");
    agent.add("I'm sorry, can you try again?");
  }

  function reportar(agent) {
    const nombre = agent.parameters.nombre;
    const cuatrimestre = agent.parameters.cuatrimestre;
    const grupo = agent.parameters.grupo;
    const carrera = agent.parameters.carrera;
    const descripcion= agent.parameters.descripcion;
    const reporte= {
    nombre,cuatrimestre,grupo,carrera,descripcion
  }
  console.log(reporte)

  
  agent.add(`¡Gracias por reportar! Hemos registrado el reporte de ${nombre}.`);
  }


  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Reportes', reportar);
 
  agent.handleRequest(intentMap);
})

app.listen(5000,()=>console.log("Servidor en el puerto " + 5000))