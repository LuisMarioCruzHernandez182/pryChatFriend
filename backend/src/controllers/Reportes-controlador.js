const Accesos = require("../models/Reportes-modelos");
const { WebhookClient } = require('dialogflow-fulfillment');

const RegistrarReportes = async (req, res) => {
    try {
        const agent = new WebhookClient({ request: req, response: res });

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
            const descripcion = agent.parameters.descripcion;
            const reporte = new Accesos({
                nombre, cuatrimestre, grupo, descripcion, carrera,
            })
    
            reporte.save();
            agent.add(`¡Gracias por reportar! Hemos registrado el reporte de ${nombre}.`);
        }
        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('Default Fallback Intent', fallback);
        intentMap.set('Reportes', reportar);
        //intentMap.set('reportar', reportar);
        agent.handleRequest(intentMap);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = RegistrarReportes;