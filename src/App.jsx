import './App.css'
import { useEffect} from 'react'
import { login } from './api/user.api'
import SectionContainer from './components/SectionContainer'
import UrlList from './components/UrlList'
import {useUrls} from './context/UrlContext'
import FormUrl from './components/FormUrl'

function App() {
  const { urls } = useUrls()

  const signIn = async () => {
    try {
      await login({ username: 'franco', password: 'password' })
    } catch (error) {
      console.log(error)
    }
  }
  const getData = async () => {
    await signIn();
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      
      <header>
        <nav></nav>
      </header>

      <main className='w-full relative'>

        <SectionContainer>
          <h1 className='text-center text-5xl mt-24 mb-14'>Short url</h1>

          <FormUrl/>
          
          <UrlList urls={urls}/>

        </SectionContainer>
      </main>
    </>
  )
}

export default App
