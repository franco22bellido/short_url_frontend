import axios from "./axios.config";

export const login = async (user)=> {
    try {
        const res = await axios.post('/auth/login', user)
        return res.data;
    } catch (error) {
        console.log(error)
    }
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
    try {
        const {data} = await axios.get('/auth/validate')
        return data;
    } catch (error) {
        console.log(error)
    }
}