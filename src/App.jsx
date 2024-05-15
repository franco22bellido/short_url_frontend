import './App.css'
import { useEffect, useState } from 'react'
import { login } from './api/user.api'
import { getUrls, createUrl, deleteUrl } from './api/url.api' 
import { Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

function App() {
  const [urls, setUrls] = useState([])
  const [user, setUser] = useState()
  const {handleSubmit, reset, register} = useForm()

  const signIn = async () => {
    try {
      const data = await login({username: 'franco', password: 'password'})
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }
  const getAllUrls = async ()=> {
    try {
      const data = await getUrls();
      setUrls(data)
    } catch (error) {
      console.log(error)
    }
  }
  const getData = async()=> {
    await signIn();
    await getAllUrls();
  }
  const deleteOne = async (objectId)=> {
    await deleteUrl(objectId)

    setUrls(urls.filter((url)=> {
      return url._id !== objectId
    }))
    

  }

  const onSubmit = handleSubmit(async (values)=> {
    const {url} = values;
    
    const data = await createUrl(url)
    reset()
    setUrls([...urls, data])
  })
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <header>
        <nav></nav>
      </header>

      <main className='w-full'>

        <section className='w-full p-3 lg:w-[740px] m-auto flex flex-col justify-center'>
          <h1 className='text-center text-5xl mt-24 mb-14'>Short url</h1>

          <form onSubmit={onSubmit} className="flex flex-row justify-center flex-wrap my-10 gap-4" action="">
            <input {...register('url', {required: true})} className='w-full sm:w-[343px] px-20 py-1 border rounded' type="text" placeholder='write your url' />
            <button type='submit' className='w-full sm:w-24 py-2 rounded-full bg-slate-600'>save url</button>
          </form>

        {
          urls && 
          urls.map((url)=> (
            <article key={url._id} className='flex flex-row justify-between flex-wrap border w-full px-6 py-5'>
              <p>{url.url}</p>
              <Link
              target='_blank'
              rel="noopener noreferrer"
              to={`${location.origin}/${url.shortUrl}`}
              >{`${location.origin}/${url.shortUrl}`}</Link>

                <div className='flex'>
                <button className='w-full sm:w-24 py-2 rounded-full bg-red-600' onClick={()=> deleteOne(url._id)}>Delete</button>
                <button className='w-full sm:w-24 py-2 rounded-full bg-slate-600' onClick={() => {navigator.clipboard.writeText(`${location.origin}/${url.shortUrl}`)}}>Copy</button>
                <div className='w-full sm:w-24 py-2 rounded-full bg-amber-400 text-center text-white'>
                 <Link
                 target='_blank'
                 rel="noopener noreferrer"
                 to={`${location.origin}/${url.shortUrl}`}
                >Visit</Link>
                </div>

                </div>
            </article>
          ))
        }
        </section>

      </main>
    </>
  )
}

export default App
