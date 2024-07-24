const Accesos = require("../models/Reportes-modelos");
const Grafica = require("../models/Grafica");
const { WebhookClient } = require('dialogflow-fulfillment');
const crypto = require('crypto');
const errorHandler = require("../middleware/handleErrors");

require('dotenv').config();

const nodemailer = require("nodemailer");
const { clearScreenDown } = require("readline");

const algorithm = 'aes-256-cbc';

const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const palabrasArray = ["matar", "suicidar", "arma", "pistola", "cuchillo", "navaja", "apuñalar", "apuñalo", "ahogar", "estrangular", "disparar", "golpes", "golpeo", "pego", "burlo", "burlaron", "golpearon", "difamaron", "armas", "cuchillos", "navajas"];


const fisico = [
    "golpeo", "golpearon", "empujo", "empujaron", "tiro", "tirar", "tiraron", "tiró", "lanzó", "lanzaron", "lanzo", 
    "apuñalar", "apuñalo", "apuñalaron", "estrangular", "estrangularon", "estrangulado", "herir", "heridas", "herido", "lastimar", 
    "lastimaron", "daño", "agredieron", "pegaron", "patearon", "lastimo", "pateo", "hirio", "apuñalaron"
];

const verbal = [
    "insulto", "insultó",  "insultaron", "insultándome", "grito", "gritó", "gritaron", "gritándome", "llamo", "llamaron", "dijeron", "groserías", 
    "groseria", "amenazaron", "amenazar", "amenaza", "amenazó", "amenaza", "humillar", "humillaron",  "humillandome", "denigraron", 
    "denigrar", "denigraron", "denigrándome", "menospreciaron", "ofendieron", "ofender", "ofendió", "ofendio", "ofendieron", "insulto"
];

const social = [
    "excluyo", "excluyeron", "aislo", "aislaron", "aislamiento", "ignoro", "ignoraron", "margino", "rechazo", "rechazaron", "burlas", "burla", 
    "burlaron", "hostigaron", "hostigar", "intimidar", "intimidaron", "apartaron", "dejaron", "sola", "solo", "separaron", "separaron", "burlo"
];

const ciberbullying = [
    "mensajes", "línea", "internet", "redes", "sociales", "difamo", "difamaron", "ciberacoso",  "digitales", "virtual", "difundir", "difundieron", "publicar", "publicaron", 
    "expusieron", "expuso", "exponer", "internet", "cyberbullying", "facebook", "Facebook", "instagram", "Instagram", "WhatsApp", "whatsapp", "Telegram", "telegram", "X", "x", "Twitter", "twitter"
];

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
    const ahora = new Date();
    const mes = ahora.getMonth();
    const ano = ahora.getFullYear();
    const anoSiguiente = mes === 11 ? ano + 1 : ano;
    const { des } = req.body;
    const nombresMeses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const nombreMes = nombresMeses[mes];
    const resultado = `${nombreMes.toUpperCase()} ${anoSiguiente}`;


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
            const desArray = descripcion.split(" ");
            const graficaDates = () => {
                desArray.map(item => {
                    fisico.map(async (fis) => {
                        if (item == fis) {
                            const res = await Grafica.find({ fecha: resultado });
                            if (res.length > 0) {
                                const graficaFound = await Grafica.findOneAndUpdate({ fecha: resultado }, { fisico: res[0].fisico + 1 });
                                return graficaFound;
                            } else {
                                const nuevaGrafica = new Grafica({
                                    fecha: resultado,
                                    fisico: 1,
                                    verbal: 0,
                                    social: 0,
                                    ciberbullying: 0,
                                })
                                return await nuevaGrafica.save();
                            }

                        }
                    })

                    verbal.map(async (verb) => {
                        if (item == verb) {
                            const res = await Grafica.find({ fecha: resultado });
                            if (res.length > 0) {
                                const graficaFound = await Grafica.findOneAndUpdate({ fecha: resultado }, { verbal: res[0].verbal + 1 });
                                return graficaFound;
                            } else {
                                const nuevaGrafica = new Grafica({
                                    fecha: resultado,
                                    fisico: 0,
                                    verbal: 1,
                                    social: 0,
                                    ciberbullying: 0,
                                })
                                return await nuevaGrafica.save();
                            }

                        }
                    })
                    social.map(async (soscialItem) => {
                        if (item == soscialItem) {
                            const res = await Grafica.find({ fecha: resultado });
                            if (res.length > 0) {
                                const graficaFound = await Grafica.findOneAndUpdate({ fecha: resultado }, { social: res[0].social + 1 });
                                return graficaFound;
                            } else {
                                const nuevaGrafica = new Grafica({
                                    fecha: resultado,
                                    fisico: 0,
                                    verbal: 0,
                                    social: 1,
                                    ciberbullying: 0,
                                })
                                return await nuevaGrafica.save();
                            }

                        }
                    })
                    ciberbullying.map(async (ciber) => {
                        if (item == ciber) {
                            const res = await Grafica.find({ fecha: resultado });
                            if (res.length > 0) {
                                const graficaFound = await Grafica.findOneAndUpdate({ fecha: resultado }, { ciberbullying: res[0].ciberbullying + 1 });
                                return graficaFound;
                            } else {
                                const nuevaGrafica = new Grafica({
                                    fecha: resultado,
                                    fisico: 0,
                                    verbal: 0,
                                    social: 0,
                                    ciberbullying: 1,
                                })
                                return await nuevaGrafica.save();
                            }

                        }
                    })
                });
            };
            graficaDates();
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

            const desMin = descripcion.toLowerCase();
            const palabrasDescripcion = desMin.split(/\s+/);

            const palabrasEncontradas = palabrasDescripcion.filter(palabra => palabrasArray.includes(palabra));
            if (palabrasEncontradas.length > 0) {
                const html = `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Restaurar Contraseña</title>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        p {
                            color: #666;
                            line-height: 1.6;
                        }
                        .highlight {
                            color: #d9534f;
                            font-weight: bold;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            font-size: 0.9em;
                            color: #999;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Caso de Bullying grave</h1>
                        <p>El alumno <span class="highlight">${nombre}</span> de la carrera <span class="highlight">${carrera}</span> del cuatrimestre <span class="highlight">${cuatrimestre}</span>-<span class="highlight">${grupo}</span> ha estado haciendo bullying a uno de sus compañeros.</p>
                        <p>El reporte es el siguiente:</p>
                        <p><span class="highlight">${descripcion}</span></p>
                        <p>Por lo cual se requiere de intervención inmediata.</p>
                        <div class="footer">
                            <p>&copy; 2024 ChatFriend</p>
                        </div>
                    </div>
                </body>
                </html>
             `
                const correo = "20221045@uthh.edu.mx"
                enviarCorreo(correo, "Caso de bullying", html);
            }

            agent.add(`¡Gracias por reportar! Hemos registrado el reporte de ${nombre}.`);
        }
        function restartConversation(agent) {
            agent.end("La conversación ha terminado. Si necesitas más ayuda, vuelve a iniciar una nueva conversación.");
          }

        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('Default Fallback Intent', fallback);
        intentMap.set('Despedida', restartConversation);
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
                    fecha: reporte.toObject().fecha,
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


const enviarCorreo = (correo, subject, html) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chatfriend375@gmail.com',
            pass: 'eznj whwf skut bwqe'
        }
    });

    var mailOptions = {
        from: 'chatfriend375@gmail.com',
        to: correo,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send({ status: 'success' });
        }
    });
}

const getGraficaDatos = async (req, res, next) => {
    const { fecha } = req.body;
    try {
        const datos = await Grafica.findOne({ fecha });
        if (!datos) return next(errorHandler(404, `No se cuenta con reportes en el mes de ${fecha}`));
        const resultados = [
            { tipo: 'Acoso físico', numero: datos.fisico },
            { tipo: 'Acoso verbal', numero: datos.verbal },
            { tipo: 'Acoso social', numero: datos.social },
            { tipo: 'Ciberbullying', numero: datos.ciberbullying },
        ]
        return res.json(resultados);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    RegistrarReportes,
    Reportes,
    getGraficaDatos
};
