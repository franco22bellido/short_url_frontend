import { Link } from "react-router-dom"
import { useUrls } from "../context/UrlContext"
import { useState } from "react"

const Url = ({url={}}) => {
  const {deleteOne} = useUrls()
  const [isCopied, setIsCopied]= useState(false)

  const CopyUrlToClipBoard = (shortUrl)=> {
    navigator.clipboard.writeText(`${location.origin}/${shortUrl}`)
    setIsCopied(!isCopied)
  }

  return (
    <>
        <p>{url.url}</p>
                <Link
                  target='_blank'
                  rel="noopener noreferrer"
                  to={`${location.origin}/${url.shortUrl}`}
                >{`${location.origin}/${url.shortUrl}`}</Link>

                <div className='flex'>
                  <button className='w-full sm:w-24 py-2 rounded-full bg-red-600' onClick={() => deleteOne(url._id)}>Delete</button>
                  <button className='w-full sm:w-24 py-2 rounded-full bg-slate-600'
                  onClick={() => CopyUrlToClipBoard(url.shortUrl)}>{isCopied ? 'Copied' : 'Copy'}</button>
                  <div className='w-full sm:w-24 py-2 rounded-full bg-amber-400 text-center text-white'>
                    <Link
                      target='_blank'
                      rel="noopener noreferrer"
                      to={`${location.origin}/${url.shortUrl}`}
                    >Visit</Link>
                  </div>

        </div>
    </>
  )
}

export default Url
