import axios from "axios";

const _instance = axios.create({
    baseURL: 'http://192.168.0.7:3001',
    withCredentials: true
})

export default _instance