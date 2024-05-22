import { Link } from "react-router-dom"
import { useUrls } from "../context/UrlContext"
import CopyToClipBoardButton from "./CopyToClipboardButton"
import DeleteIcon from "./icons/DeleteIcon"

const Url = ({url={}}) => {
  const {deleteOne, addClick} = useUrls()


  return (
    <>
                <p className="w-full md:w-56 min-w-56 text-center break-words md:text-base">{url.url}</p>
                <Link
                  target='_blank'
                    rel="noopener noreferrer"
                  to={`/${url.shortUrl}`}
                  className="text-base"
                  onClick={()=> addClick(url._id)}
                >{`${location.origin}/${url.shortUrl}`}</Link>

                <p className="text-base">{url.clicks} clicks</p>

                <div className='w-full md:w-44 flex flex-wrap-reverse gap-2 items-center justify-center'>
                  <button className='flex w-full md:w-24 rounded-full bg-amber-400 text-center text-white py-1 hover:scale-110 transition-all'>
                    <Link
                      className="w-full"
                      target='_blank'
                      rel="noopener noreferrer"
                      to={`/${url.shortUrl}`}
                      onClick={()=> addClick(url._id)}
                    >Visit</Link>
                  </button>
                  <CopyToClipBoardButton shortUrl={url.shortUrl}/>
                  <button className=" text-red-600 text-center hover:scale-110 transition-all" onClick={() => deleteOne(url._id)}>
                        <DeleteIcon/>
                  </button>
        </div>
    </>
  )
}

export default Url
