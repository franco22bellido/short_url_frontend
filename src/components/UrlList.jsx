import Url from "./Url"

const UrlList = ({urls=[]}) => {

  return (
    <>
      {
        urls && 
        urls.map((url)=> (
            <article key={url._id} className='flex flex-row items-center justify-between flex-wrap border w-full px-6 py-5 mb-4'>
                <Url url={url}/>
            </article>
        ))  
      }
    </>
  )
}

export default UrlList
