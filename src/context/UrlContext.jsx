import { createContext, useContext, useEffect, useState } from "react";
import { deleteUrl, getUrls } from "../api/url.api";

const UrlContext = createContext()

export const useUrls = ()=> {
    const context = useContext(UrlContext)
    if(!context) {
        throw new Error('useUrls deberia estar en un urlProvider')
    }
    return context
}


export const UrlProvider = ({children})=> {
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
      setUrls(urls.filter((url)=> {
        return url._id !== objectId
      }))
    }
    useEffect(()=>{
      getAllUrls()
    }, [])



    return (
        <UrlContext.Provider value={{deleteOne, urls, setUrls}}> 
            {children}
        </UrlContext.Provider>
    )
}

