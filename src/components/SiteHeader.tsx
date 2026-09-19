import { useState } from 'react'
import { ChevronDown, MapPin, Menu, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'

type SitePage = 'home' | 'about' | 'contact'

function Brand() {
  return <Link to="/" className="brand text-[#2a100b]" aria-label="Chilist home"><span>Chilist</span><small>Good People. Brighter Days.</small></Link>
}

export default function SiteHeader({ page }: { page: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = page === 'home'

  return (
    <>
      <div className="bg-[#2a160c] text-[#f8ead5]"><div className="page-shell flex h-8 items-center justify-between text-[10px] font-semibold sm:text-xs"><p className="flex items-center gap-2"><MapPin size={13} className="text-[#ffbd19]" /> {isHome ? 'Open daily, serving our community with pride' : 'Good People. Brighter Days.'}</p><div className="hidden gap-5 sm:flex"><Link to="/contact">Customer Support</Link><Link to="/#story">Careers</Link><Link to="/#testimonials">{isHome ? 'News & Offers' : 'News & Updates'}</Link></div></div></div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffaf2]/95 backdrop-blur">
        <div className="page-shell flex h-19.5 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Main navigation"><Link className={`nav-link ${page === 'home' ? 'active' : ''}`} to="/#home">Home</Link><Link className="nav-link flex items-center gap-1" to="/#services">Our Services <ChevronDown size={14} /></Link><Link className={`nav-link ${page === 'about' ? 'active' : ''}`} to="/about">About Us</Link><Link className="nav-link" to="/#locations">Our Locations</Link><Link className="nav-link" to="/#impact">Sustainability</Link><Link className={`nav-link ${page === 'contact' ? 'active' : ''}`} to="/contact">{isHome ? 'Contact' : 'Contact Us'}</Link></nav>
          <div className="flex items-center gap-2"><button className="icon-button hidden sm:grid" aria-label="Search"><Search size={19} /></button><Link to="/#locations" className="primary-button hidden sm:flex"><MapPin size={17} fill="currentColor" /> Find a Location</Link><button className="icon-button grid lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
        {menuOpen && <nav className="page-shell flex flex-col gap-4 border-t border-black/10 py-5 text-sm font-bold lg:hidden"><Link to="/#home" onClick={() => setMenuOpen(false)}>Home</Link><Link to="/#services" onClick={() => setMenuOpen(false)}>Our Services</Link><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link><Link to="/#locations" onClick={() => setMenuOpen(false)}>Our Locations</Link><Link to="/#impact" onClick={() => setMenuOpen(false)}>Sustainability</Link><Link to="/contact" onClick={() => setMenuOpen(false)}>{isHome ? 'Contact' : 'Contact Us'}</Link></nav>}
      </header>
    </>
  )
}