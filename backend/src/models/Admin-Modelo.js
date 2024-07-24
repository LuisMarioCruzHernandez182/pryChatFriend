const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String,
    role: {
        type:String,
        default: "Admin"
    }
});

module.exports = mongoose.model("Administrador", adminSchema);