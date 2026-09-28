import { useEffect, useState } from 'react'
import { ChevronDown, MapPin, Menu, Search, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../services'
import './site-header.css'

type SitePage = 'home' | 'about' | 'contact' | 'services'

function Brand() {
  return <Link to="/" className="brand text-[#2a100b]" aria-label="Chilist home"><span>Chilist</span><small>Good People. Brighter Days.</small></Link>
}

export default function SiteHeader({ page }: { page: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      <div className="bg-[#2a160c] text-[#f8ead5]"><div className="page-shell flex h-8 items-center justify-between text-[10px] font-semibold sm:text-xs"><p className="flex items-center gap-2"><MapPin size={13} className="text-[#ffbd19]" /> Open daily, serving our community with pride</p><div className="hidden gap-5 sm:flex"><Link to="/contact">Customer Support</Link></div></div></div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffaf2]/95 backdrop-blur">
        <div className="page-shell flex h-19.5 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Main navigation"><Link className={`nav-link ${page === 'home' ? 'active' : ''}`} to="/#home">Home</Link><div className={`services-menu ${servicesOpen ? 'open' : ''}`} onMouseLeave={() => setServicesOpen(false)}><button className={`nav-link ${page === 'services' ? 'active' : ''}`} onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-haspopup="true">Our Services <ChevronDown size={14} /></button><div className="services-dropdown">{services.map(({ slug, title, icon: Icon }) => <Link key={slug} className={pathname === `/services/${slug}` ? 'active' : ''} to={`/services/${slug}`}><Icon size={17} /> {title}</Link>)}</div></div><Link className={`nav-link ${page === 'about' ? 'active' : ''}`} to="/about">About Us</Link><Link className={`nav-link ${page === 'contact' ? 'active' : ''}`} to="/contact">Contact Us</Link></nav>
          <div className="flex items-center gap-2"><button className="icon-button hidden sm:grid" aria-label="Search"><Search size={19} /></button><Link to="/#locations" className="primary-button hidden sm:flex"><MapPin size={17} fill="currentColor" /> Find a Location</Link><button className="icon-button grid lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
        {menuOpen && <nav className="page-shell flex flex-col gap-4 border-t border-black/10 py-5 text-sm font-bold lg:hidden"><Link to="/#home" onClick={() => setMenuOpen(false)}>Home</Link><div><button className="flex w-full items-center justify-between border-0 bg-transparent p-0 text-left font-bold text-inherit" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Our Services <ChevronDown size={16} className={servicesOpen ? 'rotate-180' : ''} /></button>{servicesOpen && <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#ffc327] pl-4 font-semibold">{services.map(({ slug, title }) => <Link key={slug} to={`/services/${slug}`}>{title}</Link>)}</div>}</div><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></nav>}
      </header>
    </>
  )
}