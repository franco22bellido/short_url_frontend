import { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getOneUrl} from '../api/url.api'
import { useUrls } from '../context/UrlContext'

const ToShortUrl = () => {
  const {shortUrl} = useParams()
  const {setErrors} = useUrls()
  const navigate = useNavigate()

  const getUrl = async ()=> {
    try {
      const data = await getOneUrl(shortUrl) 
      return window.location.href = data.url

    } catch (error) {
      if(!Array.isArray(error)){
        setErrors([error.message])
        return navigate('/')
      }
      setErrors(error)
    }
    
  }
  useEffect(()=> {
    getUrl()
  }, [])
}

export default ToShortUrl
