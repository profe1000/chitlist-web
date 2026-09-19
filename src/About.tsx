import { ArrowRight, Gem, Handshake, Leaf, MapPin, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import './site.css'
import './about.css'

const metrics = [
  { icon: Users, value: '100K+', label: 'Happy Customers' },
  { icon: MapPin, value: 'Multiple', label: 'Convenient Locations' },
  { icon: Handshake, value: 'Growing', label: 'With Our Communities' },
  { icon: ShieldCheck, value: 'A Brighter', label: 'Tomorrow Together' },
]

const values = [
  { number: '01', icon: Gem, title: 'Quality', text: 'Consistency you can taste, trust and return to.' },
  { number: '02', icon: Users, title: 'People', text: 'Customers, team members and communities come first.' },
  { number: '03', icon: Leaf, title: 'Integrity', text: 'Doing the right thing, especially when no one is watching.' },
  { number: '04', icon: TrendingUp, title: 'Progress', text: 'Moving forward through better ideas and everyday action.' },
]

export default function About() {
  return (
    <div className="site about-page min-h-screen bg-[#fffaf2] text-[#321914]">
      <SiteHeader page="about" />

      <main>
        <section className="about-hero"><div className="page-shell relative flex min-h-113 items-center py-14"><div className="relative z-10 max-w-145 text-white"><p className="eyebrow text-[#ffc327]">About Chilist</p><h1>More Than<br />a Business.<br /><span>A Brighter Everyday.</span></h1><p>Chilist is a proudly Nigerian brand committed to making everyday life easier, better and more enjoyable through quality food, everyday essentials and reliable fuel.</p><div className="hero-service-line"><span>Bakery</span><span>Eatery</span><span>MiniMart</span><span>Fuel</span></div></div><div className="about-hero-mark" aria-hidden="true"><strong>Since</strong><span>2014</span><small>Built around people</small></div></div></section>

        <section className="about-story"><div className="page-shell grid items-center gap-12 py-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Our story</p><h2>Rooted in People</h2><p>Chilist was built on a simple belief: that great service, quality products and welcoming spaces can make everyday life better. What started as a vision to bring together essential services under one trusted name has grown into a destination for good food, reliable fuel, everyday shopping and memorable experiences.</p><blockquote>“A place should do more than serve you. It should make the day feel easier.”</blockquote><p>Today, Chilist continues to serve individuals, families and travellers with the same commitment to quality, convenience and community.</p><Link className="primary-button mt-6" to="/#services">Our Journey <ArrowRight size={17} /></Link></div><div className="about-story-visual"><div className="about-story-photo" role="img" aria-label="Warm Chilist retail interior" /><div className="story-caption"><span>One trusted stop</span><strong>Made for everyday life.</strong></div></div></div></section>

        <section className="about-metrics"><div className="page-shell grid grid-cols-2 lg:grid-cols-4">{metrics.map(({ icon: Icon, value, label }) => <div className="about-metric" key={value}><span><Icon size={25} /></span><div><strong>{value}</strong><p>{label}</p></div></div>)}</div></section>

        <section className="about-values"><div className="page-shell py-14"><div className="values-intro"><div><p className="eyebrow">Our values</p><h2>What Drives Us</h2></div><div><p>Our values shape how we work, serve and grow. They keep us focused on what truly matters: our customers, our people and the communities we serve.</p><Link className="text-link" to="/contact">Our Commitment <ArrowRight size={16} /></Link></div></div><div className="value-grid">{values.map(({ number, icon: Icon, title, text }) => <article key={title}><span className="value-number">{number}</span><span className="value-icon"><Icon size={25} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

        <section className="impact-gallery"><div className="impact-copy"><p className="eyebrow text-[#ffc327]">Our impact</p><h2>Stronger<br />Communities.<br /><span>Brighter Days.</span></h2><p>We support the people and places we serve through job creation, local partnerships and community initiatives that make a real difference.</p><Link className="primary-button mt-6" to="/contact">Our Community <ArrowRight size={17} /></Link></div><figure><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85" alt="Team member serving a customer" /><figcaption><small>01</small>Good Food.<br />Happy People.</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=85" alt="Vehicle service at a filling station" /><figcaption><small>02</small>Fueling Journeys.<br />Everyday.</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=85" alt="Friendly community team" /><figcaption><small>03</small>Everyday Essentials.<br />Always Here.</figcaption></figure></section>
      </main>

      <SiteFooter page="about" />
    </div>
  )
}