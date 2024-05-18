import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getOneUrl} from '../api/url.api'

const ToShortUrl = () => {
  const {shortUrl} = useParams()

  const getUrl = async ()=> {
    const data = await getOneUrl(shortUrl)
    if(data.status === 404) return window.location.pathname = '/'
    return window.location.href = data.url
  }
  useEffect(()=> {
    getUrl()
  }, [])
}

export default ToShortUrl
