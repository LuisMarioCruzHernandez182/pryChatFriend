const mongoose = require('mongoose');

const graficaSchema = new mongoose.Schema({
    fecha: {
        type:String,
        unique:true,
        required:true
    },
    fisico: Number,
    verbal: Number,
    social: Number,
    ciberbullying:Number,
});

module.exports = mongoose.model("Grafica", graficaSchema);