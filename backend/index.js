const express = require('express')
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/webhook', express.json() ,function (req, res) {
  const agent = new WebhookClient({ request:req, response:res });
  //console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  //console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
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