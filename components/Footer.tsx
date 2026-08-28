import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const services = ['Website Design', 'E-commerce Development', 'UI/UX Design', 'Website Maintenance']
const pages = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/quote', label: 'Get a Quote' },
]

export default function Footer() {
  return (
    <footer className="mt-32 bg-dark border-t border-white/[0.06] day:border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-grotesk text-white font-bold text-xs">IZ</span>
              </div>
              <span className="font-grotesk font-bold text-heading text-lg">IZMVH</span>
            </div>
            <p className="text-muted text-sm leading-[1.7] mb-6">
              Building exceptional digital experiences for businesses that want to grow online.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:iza.vuyo@izmvh.co.za" className="flex items-center gap-2 text-muted hover:text-heading transition-colors text-sm">
                <Mail size={14} className="text-accent" /> iza.vuyo@izmvh.co.za
              </a>
              <a href="tel:+27000000000" className="flex items-center gap-2 text-muted hover:text-heading transition-colors text-sm">
                <Phone size={14} className="text-accent" /> 063 481 1469
              </a>
              <span className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={14} className="text-accent" /> Gqeberha, South Africa
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grotesk font-semibold text-accent text-sm mb-5 tracking-widest uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-muted hover:text-heading transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-grotesk font-semibold text-accent text-sm mb-5 tracking-widest uppercase">Company</h4>
            <ul className="flex flex-col gap-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-muted hover:text-heading transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Block */}
          <div className="rounded-2xl p-6 bg-accent/[0.15] border border-accent/30">
            <h4 className="font-grotesk font-semibold text-heading mb-3">Ready to start?</h4>
            <p className="text-sm mb-5 leading-relaxed text-muted">
              Let&apos;s build something remarkable together.
            </p>
            <Link
              href="/quote"
              className="flex items-center gap-2 bg-accent text-black text-sm font-medium rounded-lg transition-all duration-200 w-fit px-5 py-3"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="h-px bg-white/[0.08] day:bg-black/[0.08] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted opacity-70">© 2025 IZMVH Design Studio. All rights reserved.</p>
          <p className="text-sm text-muted opacity-70">Crafted with precision in Gqeberha, South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
