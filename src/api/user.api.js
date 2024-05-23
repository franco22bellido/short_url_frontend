import axios from "./axios.config";

export const login = async (user)=> {
        const res = await axios.post('/auth/login', user)
        return res.data;
}
export const register = async (user)=> {
    try {
        const {data} = axios.post('/auth/register', user)
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const validateToken = async ()=> {
        return await axios.get('/auth/validate')
}