import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UrlProvider } from './context/UrlContext'
import { AuthProvider } from './context/AuthContext'
import ValidateSession from './common/ValidateSession'
import RegisterPage from './pages/RegisterPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ToShortUrl from './components/ToShortUrl'
import Song from './pages/Song';

function App() {

  return (
    <AuthProvider>
      <UrlProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/songs' element={< Song />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/test/:usertest' element={<Home />} />
            <Route element={<ValidateSession />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/:shortUrl' element={<ToShortUrl />} />
          </Routes>
        </BrowserRouter>
      </UrlProvider>
    </AuthProvider>
  )
}

export default App
