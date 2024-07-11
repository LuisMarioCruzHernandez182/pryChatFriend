import { data } from "autoprefixer";
import axios from "./axios";

export const login = data=>axios.post ("/admin/login", data);

export const getReportesApi = () => axios.get("/reportes/reportes");