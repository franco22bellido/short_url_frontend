import axios from './axios.config'

export const getUrls = async () => {
    try {
        const { data } = await axios.get('/url')
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getOneUrl = async (shortUrl) => {
    try {
        const { data } = await axios.get(`/url/${shortUrl}`)
        return data
    } catch (error) {
        throw error.response.data
    }
}
export const createUrl = async (url) => {
    try {
        const { data } = await axios.post(`/url`, { url })
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const deleteUrl = async (objectId) => {
    try {
        const { data } = await axios.delete(`/url/${objectId}`)
        return data;
    } catch (error) {
        console.log(error)
    }
}