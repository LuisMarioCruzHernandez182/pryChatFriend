const jwt = require("jsonwebtoken");
const Administrador = require("../models/Admin-Modelo");

const verifyToken = async (req, res,next) => {

    const { token } = req.body;
  
    if (!token) return res.status(401).json({ message: "No autorizado" });
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      
      if (err) return res.status(401).json({ message: "No autorizado" });
  
      const userFound = await Administrador.findById(user.id);
      
      if (!userFound) return res.status(401).json({ message: "Usuario no encontrado" });
      
      return res.json(
        {
          id: userFound._id,
          nombre: userFound.nombre,
          correo: userFound.correo,
          role: userFound.role
        }
      )
    });
  };

  module.exports = {verifyToken};