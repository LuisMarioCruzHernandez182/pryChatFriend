const express = require('express');
const {registrar, login, cerrarSesion} = require("../controllers/Admin-controler");
const { verify } = require('crypto');
const { verifyToken } = require('../middleware/verifyAuth');

const route = express.Router();

route.post("/registrar",registrar);
route.post("/login",login);
route.get("/cerrarSesion",cerrarSesion);
route.post("/verifyAuth",verifyToken);

module.exports = route;