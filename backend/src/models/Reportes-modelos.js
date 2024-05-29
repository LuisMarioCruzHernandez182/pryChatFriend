const mongoose = require('mongoose');

const reportesSchema = new mongoose.Schema({
    nombre:String,
    cuatrimestre:String,
    grupo:String,
    carrera:String,
    descripcion:String,
    fecha:Date,
});

module.exports = mongoose.model("Reportes",reportesSchema);