import { useState } from 'react'
import { Mail, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

type SitePage = 'home' | 'about' | 'contact'

function Brand() {
  return <Link to="/" className="brand text-white" aria-label="Chilist home"><span>Chilist</span><small>Good People. Brighter Days.</small></Link>
}

export default function SiteFooter({ page }: { page: SitePage }) {
  const [subscribed, setSubscribed] = useState(false)
  const isHome = page === 'home'

  return (
    <footer id={isHome ? 'contact' : undefined} className="bg-[#2a160c] text-[#f8ead5]">
      <div className={`page-shell grid gap-10 ${isHome ? 'py-14 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr]' : 'py-12 lg:grid-cols-[1.2fr_.8fr_.9fr_1.2fr]'} sm:grid-cols-2`}>
        <div><Brand /><p className={`${isHome ? 'max-w-xs leading-6' : ''} mt-5 text-sm text-white/60`}>{isHome ? 'Good food. Dependable service. Brighter days for every community we call home.' : 'Good People. Brighter Days.'}</p>{isHome && <div className="mt-5 flex gap-2"><a className="social" href="#contact" aria-label="Community"><Users size={17} /></a><a className="social" href="mailto:hello@chilist.ng" aria-label="Email"><Mail size={17} /></a></div>}</div>
        <div className="footer-links"><h3>Quick Links</h3><Link to="/#home">Home</Link><Link to="/about">About Us</Link><Link to="/#services">Our Services</Link>{isHome ? <Link to="/#locations">Our Locations</Link> : <Link to="/contact">Contact Us</Link>}</div>
        <div className="footer-links"><h3>{isHome ? 'Get in Touch' : 'Contact Info'}</h3><p>+234 803 123 4567</p><p>hello@chilist.ng</p><p>Warri, Delta State</p></div>
        <div><h3 className="text-sm font-extrabold">{isHome ? 'Stay Updated' : 'Subscribe to Our Newsletter'}</h3><p className={`${isHome ? 'mt-3 text-sm' : 'mt-3 text-xs'} text-white/60`}>{isHome ? 'Get our latest updates, offers and more.' : 'Get the latest news, offers and more.'}</p><form className={`${isHome ? 'mt-5' : 'mt-4'} flex overflow-hidden rounded-md bg-white/10`} onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><input required type="email" aria-label={isHome ? 'Email address' : 'Newsletter email'} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-white outline-none placeholder:text-white/45" /><button className="bg-[#ffc327] px-4 text-xs font-extrabold text-[#2a160c]">{subscribed ? 'Done!' : 'Subscribe'}</button></form></div>
      </div>
      <div className={`page-shell border-t border-white/10 py-5 text-[11px] text-white/45 ${isHome ? 'flex flex-col gap-3 sm:flex-row sm:justify-between' : 'flex justify-between'}`}><p>© 2026 Chilist. All rights reserved.</p><p>Privacy Policy &nbsp; | &nbsp; Terms of Service</p></div>
    </footer>
  )
}