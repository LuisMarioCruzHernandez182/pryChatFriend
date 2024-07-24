const express = require('express');
const {RegistrarReportes,
    Reportes,
    getGraficaDatos
    
} = require("../controllers/Reportes-controlador");

const route = express.Router();

route.post("/reportar",RegistrarReportes);

route.get("/reportes",Reportes);

route.put("/grafica",getGraficaDatos);

module.exports = route;