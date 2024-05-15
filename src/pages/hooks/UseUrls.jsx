import { useEffect, useState } from "react"
import { deleteUrl, getUrls } from "../../api/url.api";

const UseUrls = () => {
  const [urls, setUrls] = useState([])

  const getAllUrls = async ()=> {
    try {
      const data = await getUrls();
      setUrls(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteOne = async (objectId)=> {
    await deleteUrl(objectId)
    console.log(objectId)
    setUrls(urls.filter((url)=> {
      return url._id !== objectId
    }))
  }
  useEffect(()=>{
    getAllUrls()
  }, [])
  return {
    urls, setUrls, deleteOne
  }
}

export default UseUrls
