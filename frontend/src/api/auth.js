import { data } from "autoprefixer";
import axios from "./axios";

export const login = data=>axios.post ("/admin/login", data);

export const getReportesApi = () => axios.get("/reportes/reportes");

export const verifyToken= (token)=> axios.post("/admin/verifyAuth",token);

export const cerrarsesion= ()=> axios.get("/admin/cerrarSesion")

export const datosGrafica = (fecha) => axios.put("/reportes/grafica",fecha);