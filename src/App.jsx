import './App.css'
import { useEffect } from 'react'
import SectionContainer from './components/SectionContainer'
import UrlList from './components/UrlList'
import { useUrls } from './context/UrlContext'
import FormUrl from './components/FormUrl'
import { useParams } from 'react-router-dom'
import { UseAuth } from './context/authContext'

function App() {
  const { urls, getAllUrls } = useUrls()
  const { signIn } = UseAuth()
  const { usertest } = useParams()

  const makeLogin = async () => {
    if (usertest === 'usertest') {
      await signIn({ username: 'franco', password: 'password' })
    }
  }
  const getData = async () => {
    await makeLogin();
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
          <h1 className='text-center text-3xl sm:text-5xl mt-6 mb-5'>Short url</h1>

          <FormUrl />
          <UrlList urls={urls} />

        </SectionContainer>
      </main>
    </>
  )
}

export default App
