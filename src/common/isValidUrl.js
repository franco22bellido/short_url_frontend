export const addHttps = (urlString='')=> {
    let urlWithHttps = 'https://'
    if(!urlString.startsWith('https://' || !urlString.startsWith('http://'))){
        return urlWithHttps.concat(urlString)
    }
    return urlString
}
export const isValidAndConvertUrl = (urlString='') => {   
    let url;
    try {
          let include = urlString.includes('.')
          if(!include) return false
          include = urlString.includes(' ')
          if(include) return false

          url = new URL(urlString);
    }
    catch(e){
      return addHttps(urlString)
    }
    if(url.protocol === "http:" || url.protocol === "https:"){
        return urlString
    }
    return false
}

export const searchInGoogle = (urlString='')=>{
    let url;

    if(!urlString.includes('.')){
        url= `https://www.google.com/search?q=${urlString}`
        return url
    }
}