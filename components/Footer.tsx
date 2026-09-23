import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const services = ['Digital Audit', 'Website Development', 'Launch & Deployment', 'Monthly Digital Care', 'Search & Growth']
const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.08] day:border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand + CTA */}
          <div className="lg:col-span-2">
            <span className="font-grotesk font-semibold text-heading text-lg tracking-tight block mb-5">
              IZMVH
            </span>
            <p className="text-muted text-sm leading-[1.7] mb-6 max-w-sm">
              I help businesses build, manage, improve and grow their digital presence — not just their website.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-accent transition-colors"
            >
              Start with a Digital Audit <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grotesk font-semibold text-accent text-xs mb-5 tracking-[0.15em] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-muted hover:text-heading transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages + contact */}
          <div>
            <h4 className="font-grotesk font-semibold text-accent text-xs mb-5 tracking-[0.15em] uppercase">Company</h4>
            <ul className="flex flex-col gap-3 mb-8">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-muted hover:text-heading transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="mailto:iza.vuyo@izmvh.co.za" className="flex items-center gap-2 text-muted hover:text-heading transition-colors text-sm">
                <Mail size={14} className="text-accent" /> iza.vuyo@izmvh.co.za
              </a>
              <a href="tel:+27634811469" className="flex items-center gap-2 text-muted hover:text-heading transition-colors text-sm">
                <Phone size={14} className="text-accent" /> 063 481 1469
              </a>
              <span className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={14} className="text-accent" /> Gqeberha, South Africa
              </span>
            </div>
          </div>
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted opacity-70">© 2026 IZMVH Design Studio. All rights reserved.</p>
          <p className="text-sm text-muted opacity-70">Crafted with precision in Gqeberha, South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
