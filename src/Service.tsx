import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { services } from './services'
import './site.css'
import './service.css'

export default function Service() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <Navigate to="/#services" replace />

  const { title, image, heroImage, alt, icon: Icon, tagline, intro, highlights } = service
  const others = services.filter((item) => item.slug !== slug)

  return (
    <div className="site service-page min-h-screen bg-[#fffaf2] text-[#321914]">
      <SiteHeader page="services" />

      <main>
        <section className="service-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(32,12,4,.94) 0%,rgba(48,24,12,.72) 45%,rgba(38,17,5,.12) 80%),url('${heroImage}')` }}><div className="page-shell flex min-h-105 items-center py-16"><div className="max-w-150 text-white"><p className="eyebrow flex items-center gap-2 text-[#ffc327]"><Icon size={16} /> Chilist {title}</p><h1>{tagline}</h1><p>{intro}</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/#locations" className="primary-button"><MapPin size={17} fill="currentColor" /> Find a Location</Link><Link to="/contact" className="secondary-button border-white/60 bg-white/10 text-white hover:bg-white hover:text-[#321914]">Contact Us</Link></div></div></div></section>

        <section className="section-space"><div className="page-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]"><div><p className="eyebrow">What we offer</p><h2 className="section-title">Why Choose Chilist {title}</h2><ul className="service-highlights">{highlights.map(({ title: heading, text }) => <li key={heading}><CheckCircle2 size={22} /><div><h3>{heading}</h3><p>{text}</p></div></li>)}</ul></div><img className="service-feature-photo" src={image} alt={alt} /></div></section>

        <section className="section-space border-t border-[#eadbc8] bg-white"><div className="page-shell"><p className="eyebrow">More from Chilist</p><h2 className="section-title">Explore Our Other Services</h2><div className="other-services">{others.map(({ slug: otherSlug, title: otherTitle, text, image: otherImage, alt: otherAlt, icon: OtherIcon }) => <Link to={`/services/${otherSlug}`} className="service-card" key={otherSlug}><div className="relative h-44 overflow-hidden"><img src={otherImage} alt={otherAlt} /><span className="service-icon"><OtherIcon size={23} /></span></div><div className="p-5"><h3>{otherTitle}</h3><p>{text}</p><span className="text-link">Learn More <ArrowRight size={15} /></span></div></Link>)}</div></div></section>
      </main>

      <SiteFooter page="services" />
    </div>
  )
}
