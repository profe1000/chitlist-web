import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './base.css'
import Contact from './Contact'
import Home from './Home'

function RouteEffects() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    document.title = pathname === '/contact'
      ? 'Contact Us | Chilist'
      : 'Chilist | Good People. Brighter Days.'

    if (!hash) window.scrollTo({ top: 0 })
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
