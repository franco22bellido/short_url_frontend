import { Link } from "react-router-dom"
import { useUrls } from "../context/UrlContext"
import CopyToClipBoardButton from "./CopyToClipBoardButton"
import DeleteIcon from "./icons/DeleteIcon"

const Url = ({url={}}) => {
  const {deleteOne, addClick} = useUrls()


  return (
    <>
                <p className="max-w-56 min-w-56 break-words text-2xl md:text-xl">{url.url}</p>
                <Link
                  target='_blank'
                  rel="noopener noreferrer"
                  to={`/${url.shortUrl}`}
                  className="text-2xl md:text-xl"
                  onClick={()=> addClick(url._id)}
                >{`${location.origin}/${url.shortUrl}`}</Link>

                <p className="text-xl md:md:text-xl">{url.clicks} clicks</p>

                <div className='w-full md:w-44 flex flex-wrap-reverse gap-2 items-center justify-center'>
                  <button className='flex w-full md:w-24 rounded-full bg-amber-400 text-center text-white py-1'>
                    <Link
                      className="w-full"
                      target='_blank'
                      rel="noopener noreferrer"
                      to={`/${url.shortUrl}`}
                      onClick={()=> addClick(url._id)}
                    >Visit</Link>
                  </button>
                  <CopyToClipBoardButton shortUrl={url.shortUrl}/>
                  <button className=" text-red-600 text-center" onClick={() => deleteOne(url._id)}>
                        <DeleteIcon/>
                  </button>

        </div>
    </>
  )
}

export default Url
