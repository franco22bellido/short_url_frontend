import axios from "axios";

const _instance = axios.create({
    baseURL: 'https://short-url-backend-three.vercel.app',
})

_instance.interceptors.request.use(config => {
    const token = window.localStorage.getItem('authorization');
    if (token) {
        config.headers['authorization'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default _instance