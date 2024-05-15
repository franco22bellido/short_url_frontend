import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getOneUrl} from '../api/url.api'
import {Navigate} from 'react-router-dom'
const ToShortUrl = () => {
  const {shortUrl} = useParams()
  

  const getUrl = async ()=> {
    const data = await getOneUrl(shortUrl)
    console.log(data.url)
    return <Navigate to={`${data.url}`} replace/>
  }
  useEffect(()=> {
    getUrl()
  }, [])
  return (
    <div>

    </div>
  )
}

export default ToShortUrl
