import axios from "axios";

const _instance = axios.create({
    baseURL: 'https://short-url-backend-sny9.onrender.com',
    withCredentials: true
})

export default _instance