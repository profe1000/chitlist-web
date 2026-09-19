import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Heart, Leaf, Mail, MapPin, Menu, MessageCircle,
  Minus, Phone, Plus, Search, Send, Users, X,
} from 'lucide-react'
import './site.css'
import './contact.css'

const contactCards = [
  { icon: Phone, title: 'Call Us', lines: ['+234 803 123 4567', '+234 909 876 5432'], note: 'Mon - Sun, 6:00am - 10:00pm' },
  { icon: Mail, title: 'Email Us', lines: ['hello@chilist.ng', 'support@chilist.ng'], note: 'We reply within 24 hours' },
  { icon: MapPin, title: 'Visit Us', lines: ['123 Chilist Way,', 'Sapale Road, Warri'], note: 'Delta State, Nigeria' },
  { icon: MessageCircle, title: 'Live Chat', lines: ['Chat with us on our website'], note: 'Mon - Sun, 6:00am - 10:00pm' },
]

const faqs = [
  ['What are your opening hours?', 'Our locations are open daily from 6:00am to 10:00pm, including weekends.'],
  ['Can I place a bulk order?', 'Yes. Contact our team with your requirements and preferred collection date.'],
  ['Do you have multiple locations?', 'Yes. We serve customers across multiple convenient locations in Delta State.'],
  ['How can I join your team?', 'Send your CV to careers@chilist.ng and our people team will be in touch.'],
]

function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'text-white' : 'text-[#2a100b]'}`} aria-label="Chilist home"><span>Chilist</span><small>Good People. Brighter Days.</small></Link>
}

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="site contact-page min-h-screen bg-[#fffaf2] text-[#321914]">
      <div className="bg-[#2a160c] text-[#f8ead5]"><div className="page-shell flex h-8 items-center justify-between text-[10px] font-semibold sm:text-xs"><p className="flex items-center gap-2"><MapPin size={13} className="text-[#ffbd19]" /> Good People. Brighter Days.</p><div className="hidden gap-5 sm:flex"><Link to="/contact">Customer Support</Link><Link to="/#story">Careers</Link><Link to="/#testimonials">News & Updates</Link></div></div></div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffaf2]/95 backdrop-blur">
        <div className="page-shell flex h-19.5 items-center justify-between"><Brand /><nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="Main navigation"><Link className="nav-link" to="/">Home</Link><Link className="nav-link flex items-center gap-1" to="/#services">Our Services <ChevronDown size={14} /></Link><Link className="nav-link" to="/#story">About Us</Link><Link className="nav-link" to="/#locations">Our Locations</Link><Link className="nav-link" to="/#impact">Sustainability</Link><Link className="nav-link active" to="/contact">Contact Us</Link></nav><div className="flex items-center gap-2"><button className="icon-button hidden sm:grid" aria-label="Search"><Search size={19} /></button><Link to="/#locations" className="primary-button hidden sm:flex"><MapPin size={17} fill="currentColor" /> Find a Location</Link><button className="icon-button grid lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div></div>
        {menuOpen && <nav className="page-shell flex flex-col gap-4 border-t border-black/10 py-5 text-sm font-bold lg:hidden"><Link to="/">Home</Link><Link to="/#services">Our Services</Link><Link to="/#story">About Us</Link><Link to="/#locations">Our Locations</Link><Link to="/#impact">Sustainability</Link><Link to="/contact">Contact Us</Link></nav>}
      </header>

      <main>
        <section className="contact-hero"><div className="page-shell grid min-h-105 items-center lg:grid-cols-[.72fr_1.28fr]"><div className="relative z-10 py-14"><p className="eyebrow">Contact us</p><h1>We’re Here<br /><span>For You.</span></h1><p className="mt-5 max-w-sm text-lg leading-7 text-[#5f4d46]">Questions, feedback or enquiries? We’d love to hear from you. Our team is always ready to assist.</p><div className="mt-9 flex gap-7"><div className="contact-value"><Users /><span>People</span></div><div className="contact-value"><Heart /><span>Service</span></div><div className="contact-value"><Leaf /><span>Community</span></div></div></div><div className="contact-hero-photo" role="img" aria-label="Friendly customer support representative" /></div></section>

        <section className="bg-white py-6"><div className="page-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{contactCards.map(({ icon: Icon, title, lines, note }) => <article className="contact-card" key={title}><span className="contact-card-icon"><Icon size={24} /></span><div><h2>{title}</h2>{lines.map((line) => <p key={line}>{line}</p>)}<small>{note}</small>{title === 'Live Chat' && <button type="button" onClick={() => document.querySelector<HTMLInputElement>('#full-name')?.focus()}>Start a Chat <ArrowRight size={14} /></button>}</div></article>)}</div></section>

        <section className="contact-main"><div className="page-shell grid gap-6 py-10 lg:grid-cols-[1.12fr_.88fr]">
          <div className="contact-panel"><p className="eyebrow">Send us a message</p><h2>Get In Touch</h2><p className="panel-intro">Fill in the details below and we’ll get back to you as soon as possible.</p><form className="contact-form" onSubmit={submitMessage}><label>Full Name *<input id="full-name" required placeholder="Enter your name" /></label><label>Email Address *<input required type="email" placeholder="Enter your email" /></label><label>Phone Number<input type="tel" placeholder="+234  Enter your phone number" /></label><label>Subject *<select required defaultValue=""><option value="" disabled>Select a subject</option><option>General enquiry</option><option>Bulk order</option><option>Feedback</option><option>Careers</option></select></label><label className="form-wide">Message *<textarea required rows={5} placeholder="Type your message here..." /></label><div className="form-wide flex items-center gap-4"><button className="primary-button" type="submit"><Send size={17} /> Send Message</button>{sent && <p className="success-message" role="status">Message sent. We’ll be in touch soon.</p>}</div></form></div>
          <aside className="contact-panel location-panel"><h2>Our Location</h2><p className="panel-intro">Come say hello! We’re easy to find.</p><div className="map-canvas"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-pin"><MapPin size={26} fill="currentColor" /></span><strong>Warri</strong><small>PTI Junction</small><small className="map-label-two">Jakpa Road</small></div><div className="map-address"><MapPin size={25} fill="currentColor" /><div><strong>Chilist Head Office</strong><p>123 Chilist Way, Sapale Road, Warri, Delta State, Nigeria.</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get Directions <ArrowRight size={14} /></a></div></div></aside>
        </div></section>

        <section className="faq-section"><div className="page-shell py-10"><div className="mb-6 flex items-end justify-between"><div><p className="eyebrow">Need quick answers?</p><h2>Frequently Asked Questions</h2></div></div><div className="faq-grid">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span>{openFaq === index ? <Minus size={17} /> : <Plus size={17} />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="connect-band"><div className="page-shell grid min-h-44 items-center gap-8 py-8 lg:grid-cols-[1fr_.8fr]"><div /><div><h2>Let’s Stay Connected</h2><p>Follow us for the latest updates, offers and community stories.</p><div className="mt-4 flex gap-2"><span className="social"><Users size={16} /></span><span className="social"><Mail size={16} /></span><span className="social"><MessageCircle size={16} /></span></div></div></div></section>
      </main>

      <footer className="bg-[#2a160c] text-[#f8ead5]"><div className="page-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr_1.2fr]"><div><Brand light /><p className="mt-5 text-sm text-white/60">Good People. Brighter Days.</p></div><div className="footer-links"><h3>Quick Links</h3><Link to="/">Home</Link><Link to="/#story">About Us</Link><Link to="/#services">Our Services</Link><Link to="/contact">Contact Us</Link></div><div className="footer-links"><h3>Contact Info</h3><p>+234 803 123 4567</p><p>hello@chilist.ng</p><p>Warri, Delta State</p></div><div><h3 className="text-sm font-extrabold">Subscribe to Our Newsletter</h3><p className="mt-3 text-xs text-white/60">Get the latest news, offers and more.</p><form className="mt-4 flex overflow-hidden rounded-md bg-white/10" onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><input required type="email" aria-label="Newsletter email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-white outline-none placeholder:text-white/45" /><button className="bg-[#ffc327] px-4 text-xs font-extrabold text-[#2a160c]">{subscribed ? 'Done!' : 'Subscribe'}</button></form></div></div><div className="page-shell flex justify-between border-t border-white/10 py-5 text-[11px] text-white/45"><p>© 2026 Chilist. All rights reserved.</p><p>Privacy Policy &nbsp; | &nbsp; Terms of Service</p></div></footer>
    </div>
  )
}