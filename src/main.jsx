import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToShortUrl from './components/ToShortUrl.jsx'
import { UrlProvider } from './context/UrlContext.jsx'
import { AuthProvider } from './context/authContext.jsx'
import ValidateSession from './common/validateSession.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UrlProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/test/:usertest' element={<App />} />
            <Route element={<ValidateSession />}>
              <Route path='/' element={<App />} />
            </Route>
            <Route path='/:shortUrl' element={<ToShortUrl />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </UrlProvider>
)
