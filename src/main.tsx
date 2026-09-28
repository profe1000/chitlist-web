import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './base.css'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import { services } from './services'

function RouteEffects() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    const service = services.find(({ slug }) => pathname === `/services/${slug}`)

    document.title = service
      ? `${service.title} | Chilist`
      : pathname === '/contact'
        ? 'Contact Us | Chilist'
        : pathname === '/about'
          ? 'About Us | Chilist'
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<Service />} />
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
