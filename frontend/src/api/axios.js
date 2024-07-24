import axios from "axios";
const instance= axios.create({
    baseURL: "https://prychatfriend-1.onrender.com",
    withCredentials: true
})

export default instance;