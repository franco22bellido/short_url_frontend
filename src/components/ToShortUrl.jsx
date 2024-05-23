import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getOneUrl} from '../api/url.api'

const ToShortUrl = () => {
  const {shortUrl} = useParams()

  const getUrl = async ()=> {
    const res = await getOneUrl(shortUrl)

    if(res.status !== 200) return window.location.pathname = '/'
    return window.location.href = res.data.url
    
  }
  useEffect(()=> {
    getUrl()
  }, [])
}

export default ToShortUrl
