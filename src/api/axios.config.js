import axios from "axios";

const _instance = axios.create({
    baseURL: 'https://short-url-backend-three.vercel.app',
    withCredentials: true
})

export default _instance