import { createContext, useContext, useEffect, useState } from "react";
import { createUrl, deleteUrl, getUrls } from "../api/url.api";
import { isValidAndConvertUrl} from "../common/isValidUrl";

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
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const getAllUrls = async ()=> {
      try {
        setLoading(true)
        const data = await getUrls();
        setLoading(false)
        setUrls(data)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    const deleteOne = async (objectId)=> {
      setLoading(true)
      await deleteUrl(objectId)
      setLoading(false)
      setUrls(urls.filter((url)=> {
        return url._id !== objectId
      }))
    }
    const addUrl = async (url)=> {
      try {
        let newUrl = isValidAndConvertUrl(url)
        if(!newUrl) throw new Error('Url not valid')
        
        setLoading(true)
        const data = await createUrl(newUrl)
        setLoading(false)
        setUrls([data, ...urls])
      } catch (error) {
        setErrors([error.message])
      }
    }

    const addClick = async (id)=> {
      let updatedUrls = urls.map((url)=> {
        if(url._id === id){
          url.clicks = url.clicks + 1
          return url
        }else {
          return url
        }
      })
      setUrls(updatedUrls)
    }
    

    useEffect(()=> {
      if(errors.length > 0){
        setTimeout(() => {
          setErrors([])
        }, 3500);
      }
    }, [errors])


    return (
        <UrlContext.Provider value={{deleteOne,getAllUrls, urls, setUrls, addClick, addUrl, errors, setErrors,loading}}> 
            {children}
        </UrlContext.Provider>
    )
}

