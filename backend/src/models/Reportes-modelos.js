const mongoose = require('mongoose');

const reportesSchema = new mongoose.Schema({
    nombre: String,
    ivNombre: String,
    cuatrimestre: String,
    ivCuatrimestre: String,
    grupo: String,
    ivGrupo: String,
    carrera: String,
    ivCarrera: String,
    descripcion: String,
    ivDescripcion: String,
    fecha: Date
});

module.exports = mongoose.model("Reportes",reportesSchema);