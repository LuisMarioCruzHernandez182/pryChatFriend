const Administrador = require("../models/Admin-Modelo");
require('dotenv').config();
const errorHandler = require("../middleware/handleErrors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

 const registrar = async(req,res,next) => {
    const {nombre,correo,password}  = req.body;
    try {
        const usuarioEncontrado = await Administrador.findOne({correo});
        if(usuarioEncontrado) return next(errorHandler(400,"El correo ya esta en uso"));
        const hashedPassword = bcrypt.hashSync(password,10);
        const nuevoUsuario = new Administrador({
            nombre,
            correo,
            password: hashedPassword,
        })

        await nuevoUsuario.save();
        res.status(201).json({msg:"Usuario creado correctamente"});

    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    const { correo, password } = req.body;
    console.log(correo)
    try {
        const usuario = await Administrador.findOne({ correo });

        if (!usuario) return next(errorHandler(401, "Usuario no encontrado"));

        const validarPassword = bcrypt.compareSync(password, usuario.password);

        if (!validarPassword) return next(errorHandler(401, "Contraseña incorrecta"));

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })

        const { password: pass, ...rest } = usuario._doc;

        res.cookie("token", token, {
            sameSite: "None",
            secure: true 
          })
        res.json(rest);
    } catch (error) {

        next(error);
    }
};

const cerrarSesion = async (req, res, next) => {
    try {
        res.clearCookie('token', { sameSite: 'None', secure: true });
        res.json({ message: "Sesión cerrada" });
    } catch (error) {
        next(error);
    }
};
module.exports = {registrar,login,cerrarSesion};