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
    <footer style={{ background: '#060A19', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#0F5C4A' }}>
                <span className="text-white font-bold text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>IZ</span>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>IZMVH</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.7' }} className="mb-6">
              Building exceptional digital experiences for businesses that want to grow online.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@izmvh.com" className="flex items-center gap-2 hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                <Mail size={14} style={{ color: '#1A8C6B' }} /> hello@izmvh.com
              </a>
              <a href="tel:+27000000000" className="flex items-center gap-2 hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                <Phone size={14} style={{ color: '#1A8C6B' }} /> +27 (0) 00 000 0000
              </a>
              <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                <MapPin size={14} style={{ color: '#1A8C6B' }} /> Gqeberha, South Africa
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1A8C6B' }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1A8C6B' }}>Company</h4>
            <ul className="flex flex-col gap-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Block */}
          <div className="rounded-2xl p-6" style={{ background: 'rgba(15,92,74,0.15)', border: '1px solid rgba(15,92,74,0.3)' }}>
            <h4 className="font-semibold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Ready to start?</h4>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Let&apos;s build something remarkable together.
            </p>
            <Link
              href="/quote"
              className="flex items-center gap-2 text-white text-sm font-medium rounded-lg transition-all duration-200 w-fit px-5 py-3"
              style={{ background: '#0F5C4A' }}
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2025 IZMVH Design Studio. All rights reserved.</p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>Crafted with precision in Gqeberha, South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
