import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import ToShortUrl from './components/ToShortUrl.jsx'
import { UrlProvider } from './context/UrlContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UrlProvider>

    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/:shortUrl' element={<ToShortUrl/>}/>
    </Routes>
    </BrowserRouter>
    </UrlProvider>
  </React.StrictMode>,
)
