import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UrlProvider } from './context/UrlContext'
import { AuthProvider } from './context/authContext'
import ValidateSession from './common/validateSession'
import RegisterPage from './pages/RegisterPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ToShortUrl from './components/ToShortUrl'
function App() {

  return (
    <UrlProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/test/:usertest' element={<Home/>} />
            <Route element={<ValidateSession/>}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/:shortUrl' element={<ToShortUrl/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </UrlProvider>
  )
}

export default App
