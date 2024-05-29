const express = require('express');
const RegistrarReportes = require("../controllers/Reportes-controlador");

const route = express.Router();

route.post("/reportar",RegistrarReportes);

module.exports = route;