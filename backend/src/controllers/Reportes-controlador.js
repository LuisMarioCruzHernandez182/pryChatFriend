const Accesos = require("../models/Reportes-modelos");
const { WebhookClient } = require('dialogflow-fulfillment');
const crypto = require('crypto');
require('dotenv').config();
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const encrypt = (text) => {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex')
    };
}


const decrypt = (iv, encryptedText) => {
    let ivBuffer = Buffer.from(iv, 'hex');
    let encryptedTextBuffer = Buffer.from(encryptedText, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);
    let decrypted = decipher.update(encryptedTextBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

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
            
            const { iv: ivNombre, encryptedData: encryptedNombre } = encrypt(nombre);
            const { iv: ivCuatrimestre, encryptedData: encryptedCuatrimestre } = encrypt(cuatrimestre);
            const { iv: ivGrupo, encryptedData: encryptedGrupo } = encrypt(grupo);
            const { iv: ivCarrera, encryptedData: encryptedCarrera } = encrypt(carrera);
            const { iv: ivDescripcion, encryptedData: encryptedDescripcion } = encrypt(descripcion);
            
            const reporte = new Accesos({
                nombre: encryptedNombre,
                ivNombre: ivNombre,
                cuatrimestre: encryptedCuatrimestre,
                ivCuatrimestre: ivCuatrimestre,
                grupo: encryptedGrupo,
                ivGrupo: ivGrupo,
                carrera: encryptedCarrera,
                ivCarrera: ivCarrera,
                descripcion: encryptedDescripcion,
                ivDescripcion: ivDescripcion,
                fecha: new Date()
            });

            reporte.save();
            agent.add(`¡Gracias por reportar! Hemos registrado el reporte de ${nombre}.`);
        }

        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('Default Fallback Intent', fallback);
        intentMap.set('Reportes', reportar);
        agent.handleRequest(intentMap);

    } catch (error) {
        console.log(error);
    }
};

const Reportes = async (req, res) => {
    try {
        
        const reportes = await Accesos.find();

       
        const reportesDesencriptados = reportes.map((reporte) => {
            try {
                const nombreDesencriptado = decrypt(reporte.ivNombre, reporte.nombre);
                const cuatrimestreDesencriptado = decrypt(reporte.ivCuatrimestre, reporte.cuatrimestre);
                const grupoDesencriptado = decrypt(reporte.ivGrupo, reporte.grupo);
                const carreraDesencriptado = decrypt(reporte.ivCarrera, reporte.carrera);
                const descripcionDesencriptada = decrypt(reporte.ivDescripcion, reporte.descripcion);
                
                return {
                    fecha:reporte.toObject().fecha,
                    nombre: nombreDesencriptado,
                    cuatrimestre: cuatrimestreDesencriptado,
                    grupo: grupoDesencriptado,
                    carrera: carreraDesencriptado,
                    descripcion: descripcionDesencriptada
                };
            } catch (error) {
                console.error('Error al desencriptar la descripción:', error);
                return {
                    ...reporte.toObject(),
                    nombre: 'Error al desencriptar',
                    cuatrimestre: 'Error al desencriptar',
                    grupo: 'Error al desencriptar',
                    carrera: 'Error al desencriptar',
                    descripcion: 'Error al desencriptar'
                };
            }
        });

        res.json(reportesDesencriptados);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los reportes');
    }
};

module.exports = {
    RegistrarReportes,
    Reportes
};
