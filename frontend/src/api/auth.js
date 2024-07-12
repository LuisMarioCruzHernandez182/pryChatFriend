import { data } from "autoprefixer";
import axios from "./axios";

export const login = data=>axios.post ("/admin/login", data);

export const getReportesApi = () => axios.get("/reportes/reportes");

export const verifyToken= ()=> axios.get("/admin/verifyAuth")

export const cerrarsesion= ()=> axios.get("/admin/cerrarSesion")