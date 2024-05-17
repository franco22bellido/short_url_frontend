import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {getOneUrl} from '../api/url.api'

const ToShortUrl = () => {
  const {shortUrl} = useParams()
  const [loading, setLoading] = useState(true)

  const getUrl = async ()=> {
    const data = await getOneUrl(shortUrl)
    
    let https = 'https://'

    if(!data.url.startsWith('https')){
      const newUrl = https.concat(data.url)
      window.location.href = newUrl;
      return setLoading(false);
    }
    window.location.href = data.url;
    setLoading(false);
  }
  useEffect(()=> {
    getUrl()
  }, [])
  if(loading) {
    return <div>loading...</div>
  }

  return (
    <div>

    </div>
  )
}

export default ToShortUrl
