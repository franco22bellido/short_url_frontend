import { UseAuth } from "../context/AuthContext"
import { useUrls } from "../context/UrlContext"

const Loader = () => {
    const {loading} = UseAuth()
    const {loading: loadingUrls} = useUrls()
  return (
    <>
    {
      loadingUrls || loading ?
      <img className="size-10 animate-spin"
       src="https://www.svgrepo.com/show/491270/loading-spinner.svg"
        alt="Loading icon"></img>
      : <></>
    }</>
  )
}

export default Loader
