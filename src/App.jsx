import './App.css'
import { useState } from 'react'

function App() {
  const [urls, setUrls] = useState()

  return (
    <>
      <header>
        <nav></nav>
      </header>

      <main className='w-full'>
        
        <section className='w-full p-3 lg:w-[740px] m-auto flex flex-col justify-center'>
          <h1 className='text-center text-5xl mt-24 mb-14'>Short url</h1>
          <form className="flex flex-row justify-center flex-wrap my-10 gap-4" action="">
            <input className='w-full sm:w-[343px] px-20 py-1 border rounded' type="text" placeholder='write your url'/>
            <button type='submit' className='w-full sm:w-24 py-1 rounded border bg-blue-500'>save url</button>
          </form>

          <article className='flex flex-row justify-between flex-wrap border w-full px-6 py-5'>
            <p>https://www.google.com</p>
            <p>https://www.g/nanoid.com</p>
          </article>
        </section>
        
      </main>
    </>
  )
}

export default App
