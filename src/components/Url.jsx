import { Link } from "react-router-dom"
import { useUrls } from "../context/UrlContext"
import CopyToClipBoardButton from "./CopyToClipBoardButton"
import DeleteIcon from "./icons/DeleteIcon"

const Url = ({url={}}) => {
  const {deleteOne} = useUrls()

  return (
    <>
        <p>{url.url}</p>
                <Link
                  target='_blank'
                  rel="noopener noreferrer"
                  to={`${location.origin}/${url.shortUrl}`}
                >{`${location.origin}/${url.shortUrl}`}</Link>

                <div className='flex gap-2'>
                  <CopyToClipBoardButton shortUrl={url.shortUrl}/>
                  <div className='w-full sm:w-24 py-2 rounded-full bg-amber-400 text-center text-white'>
                    <Link
                      target='_blank'
                      rel="noopener noreferrer"
                      to={`${location.origin}/${url.shortUrl}`}
                    >Visit</Link>
                  </div>
                  <button className=" text-red-600 text-center" onClick={() => deleteOne(url._id)}>
                        <DeleteIcon/>
                  </button>

        </div>
    </>
  )
}

export default Url
