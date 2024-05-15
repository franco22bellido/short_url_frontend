import axios from './axios.config'

export const getUrls = async () => {
    try {
    const { data } = await axios.get('/url')
    return data
} catch (error) {
    console.log(error)}
}
export const getOneUrl = async (shortUrl)=>{
    try {
        const {data} = await axios.get(`/url/${shortUrl}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createUrl = async (values)=> {
    try {
        const {data} = await axios.post(`/url`, values)
        return data;
    } catch (error) {
        console.log(error)
    }
}