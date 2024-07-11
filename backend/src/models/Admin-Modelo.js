const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String
});

module.exports = mongoose.model("Administrador", adminSchema);