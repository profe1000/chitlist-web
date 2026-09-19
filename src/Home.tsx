import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Clock3, Fuel, Leaf, MapPin, Play, Quote, Search,
  ShieldCheck, ShoppingBasket, Users, Utensils, X,
} from 'lucide-react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import './site.css'

const services = [
  { title: 'Bakery', text: 'Freshly baked bread, pastries and treats made with care, for every occasion.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85', icon: Clock3 },
  { title: 'Eatery', text: 'Delicious meals in a warm and welcoming environment.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', icon: Utensils },
  { title: 'MiniMart', text: 'Everyday essentials, snacks, drinks and more, always within reach.', image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=900&q=85', icon: ShoppingBasket },
  { title: 'Filling Station', text: 'Quality fuel. Reliable service. Keeping you on the move.', image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=900&q=85', icon: Fuel },
]

const promises = [
  { icon: Users, title: 'Trusted by Thousands', text: 'Customers and families' },
  { icon: ShieldCheck, title: 'Quality Assured', text: 'In everything we do' },
  { icon: MapPin, title: 'Convenient Locations', text: 'Across the region' },
  { icon: Leaf, title: 'A Brighter Tomorrow', text: 'People. Community. Progress.' },
]

const testimonials = [
  ['Great food, clean environment and friendly staff. Chilist is always my go-to stop.', 'Emeka O.'],
  ['I love the convenience. I can fuel up, grab essentials and get a nice meal all in one place.', 'Amina S.'],
  ['Consistent quality and excellent service. You can tell they care about their customers.', 'Tunde R.'],
]

export default function Home() {
  const [storyOpen, setStoryOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }, 0)

    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <div className="site min-h-screen overflow-x-hidden bg-[#fffaf2] text-[#321914]">
      <SiteHeader page="home" />

      <main>
        <section id="home" className="hero-section">
          <div className="page-shell relative z-10 flex min-h-162.5 items-center py-20 sm:min-h-152.5"><div className="max-w-162.5 text-white"><p className="eyebrow text-[#ffc327]">Beyond just a stop</p><h1 className="mt-4 text-5xl font-black leading-[.98] sm:text-7xl">Good People.<br /><span className="text-[#ffc327]">Brighter Days.</span></h1><h2 className="mt-6 text-xl font-extrabold">Bakery. Eatery. MiniMart. Filling Station.</h2><p className="mt-3 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Quality products, great food, reliable fuel and everyday essentials, all in one trusted name.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#services" className="primary-button">Explore Our Services <ArrowRight size={18} /></a><button className="secondary-button border-white/60 bg-white/10 text-white hover:bg-white hover:text-[#321914]" onClick={() => setStoryOpen(true)}><Play size={16} fill="currentColor" /> Watch Our Story</button></div><div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/25 pt-6 sm:grid-cols-3"><div className="hero-value"><ShieldCheck /><span>Quality Products<br />You Can Trust</span></div><div className="hero-value"><MapPin /><span>Convenience<br />Everyday</span></div><div className="hero-value"><Users /><span>A Stronger<br />Community</span></div></div></div></div>
        </section>

        <section id="services" className="section-space bg-[#fffaf2]"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">Our services</p><h2>Everything You Need, All in One Place</h2></div><p>From freshly baked treats to great meals, everyday essentials and quality fuel, Chilist makes life easier for individuals, families and businesses.</p><div className="hidden gap-2 md:flex"><button className="icon-button grid" onClick={() => servicesRef.current?.scrollBy({ left: -330, behavior: 'smooth' })} aria-label="Previous service"><ArrowLeft size={18} /></button><button className="icon-button grid" onClick={() => servicesRef.current?.scrollBy({ left: 330, behavior: 'smooth' })} aria-label="Next service"><ArrowRight size={18} /></button></div></div><div ref={servicesRef} className="service-grid">{services.map(({ title, text, image, icon: Icon }) => <article className="service-card" key={title}><div className="relative h-52 overflow-hidden"><img src={image} alt={`${title} at Chilist`} /><span className="service-icon"><Icon size={23} /></span></div><div className="p-5"><h3>{title}</h3><p>{text}</p><a href="#locations">Learn More <ArrowRight size={15} /></a></div></article>)}</div></div></section>

        <section id="story" className="story-section"><div className="page-shell grid min-h-125 items-center lg:grid-cols-2"><div className="py-16 pr-0 lg:pr-16"><p className="eyebrow">About Chilist</p><h2>More Than a Business</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#6b5851]">Chilist is built on a simple belief: great service can make everyday life better. We are committed to providing quality products and services while creating a positive impact in the communities we serve.</p><button className="primary-button mt-7" onClick={() => setStoryOpen(true)}>Our Story <ArrowRight size={17} /></button></div><div className="story-photo min-h-95 self-stretch" role="img" aria-label="Chilist team serving customers" /></div></section>

        <section id="impact" className="border-y border-[#eadbc8] bg-white"><div className="page-shell grid grid-cols-2 py-7 lg:grid-cols-4">{promises.map(({ icon: Icon, title, text }) => <div className="promise" key={title}><span><Icon size={25} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

        <section id="testimonials" className="section-space bg-[#fffaf2]"><div className="page-shell"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow">What our customers say</p><h2 className="section-title">Real People. Real Experiences.</h2></div><a href="#testimonials" className="text-link hidden sm:flex">View More Testimonials <ArrowRight size={16} /></a></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([quote, author]) => <figure className="quote-card" key={author}><Quote size={24} fill="currentColor" /><blockquote>{quote}</blockquote><figcaption><strong>{author}</strong><span>Customer</span></figcaption></figure>)}</div></div></section>

        <section id="locations" className="location-band"><div className="page-shell grid items-center gap-8 py-12 lg:grid-cols-[1.15fr_.85fr]"><div><p className="eyebrow text-[#ffc327]">Find a Chilist</p><h2 className="text-4xl font-black text-white sm:text-5xl">Always Close to You</h2><p className="mt-3 max-w-xl text-white/75">Discover quality food, everyday essentials and dependable service at your nearest location.</p></div><form className="flex rounded-md bg-white p-2" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="location">Enter your location</label><input id="location" className="min-w-0 flex-1 px-4 outline-none" placeholder="Enter your city or area" /><button className="primary-button shrink-0"><Search size={17} /><span className="hidden sm:inline">Search</span></button></form></div></section>
      </main>

      <SiteFooter page="home" />

      {storyOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="story-title" onClick={() => setStoryOpen(false)}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="icon-button absolute right-4 top-4 grid" onClick={() => setStoryOpen(false)} aria-label="Close story"><X size={20} /></button><p className="eyebrow">Our story</p><h2 id="story-title">Built around people.</h2><p>From one neighbourhood stop to a trusted everyday destination, Chilist has always put quality, service and community first.</p><button className="primary-button mt-6" onClick={() => setStoryOpen(false)}>Keep Exploring <ArrowRight size={17} /></button></div></div>}
    </div>
  )
}