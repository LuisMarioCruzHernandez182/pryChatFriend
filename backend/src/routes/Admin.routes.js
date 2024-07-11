const express = require('express');
const {registrar, login, cerrarSesion} = require("../controllers/Admin-controler");

const route = express.Router();

route.post("/registrar",registrar);
route.post("/login",login);
route.get("/cerrarSesion",cerrarSesion);

module.exports = route;