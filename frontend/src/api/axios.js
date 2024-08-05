import axios from "axios";
const instance= axios.create({
    baseURL: "https://prychatfriend-nvxd.onrender.com",
    withCredentials: true
})

export default instance;