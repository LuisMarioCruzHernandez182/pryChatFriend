const express = require('express');
const {RegistrarReportes,
    Reportes
    
} = require("../controllers/Reportes-controlador");

const route = express.Router();

route.post("/reportar",RegistrarReportes);

route.get("/reportes",Reportes);

module.exports = route;