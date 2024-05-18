import './App.css'
import { useEffect} from 'react'
import SectionContainer from './components/SectionContainer'
import UrlList from './components/UrlList'
import {useUrls} from './context/UrlContext'
import FormUrl from './components/FormUrl'
import { useParams } from 'react-router-dom'
import { UseAuth } from './context/authContext'

function App() {
  const { urls, getAllUrls} = useUrls()
  const {signIn} = UseAuth()
  const {usertest} = useParams()

  const getUser= async () => {
      if(usertest === 'usertest'){
        await signIn({ username: 'franco', password: 'password' })
      }
  }
  const getData = async () => {
    await getUser();
    await getAllUrls()
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
