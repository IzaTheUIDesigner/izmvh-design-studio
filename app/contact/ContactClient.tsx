'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'iza.vuyo@izmvh.co.za', href: 'mailto:iza.vuyo@izmvh.co.za' },
  { icon: <Phone size={18} />, label: 'Phone', value: '063 481 1469', href: 'tel:+27000000000' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Gqeberha (Port Elizabeth), Eastern Cape, South Africa', href: null },
  { icon: <Clock size={18} />, label: 'Response time', value: 'Within 24–48 hours on business days', href: null },
]

const projectTypes = [
  'Website Design & Development',
  'E-commerce Development',
  'UI/UX Design',
  'Website Maintenance',
  'Brand Identity',
  'Other',
]

const budgets = [
  'Under R 5,000',
  'R 5,000 – R 15,000',
  'R 15,000 – R 30,000',
  'R 30,000 – R 60,000',
  'R 60,000+',
  'Not sure yet',
]

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title={"Let's build something\ntogether."}
          subtitle="Have a project in mind? We'd love to hear about it. Fill in the form and we'll get back to you within 48 hours."
          className="max-w-2xl"
        />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left – Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-grey-DEFAULT/60 rounded-2xl p-8">
              <h3 className="font-grotesk font-semibold text-navy-DEFAULT text-lg mb-6">Get in touch</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-green-DEFAULT/10 border border-green-DEFAULT/20 flex items-center justify-center text-green-light flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-navy-DEFAULT text-sm hover:text-green-light transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy-DEFAULT text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-green-DEFAULT/20 rounded-2xl p-8 glow-green-sm">
              <h3 className="font-grotesk font-semibold text-navy-DEFAULT text-base mb-3">Prefer a structured brief?</h3>
              <p className="text-navy-DEFAULT/60 text-sm leading-relaxed mb-5">
                Use our detailed quote form to walk through your project requirements step by step.
              </p>
              <Button href="/quote" arrow>
                Get a Detailed Quote
              </Button>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-grey-DEFAULT/60 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-DEFAULT/20 border border-green-DEFAULT/30 flex items-center justify-center mb-6 glow-green">
                    <CheckCircle size={32} className="text-green-light" />
                  </div>
                  <h3 className="font-grotesk font-bold text-navy-DEFAULT text-2xl mb-3">Message sent!</h3>
                  <p className="text-navy-DEFAULT/60 leading-relaxed max-w-sm">
                    Thanks for reaching out. We&apos;ll review your message and get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="input-field"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="input-field"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      className="input-field"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        className="input-field"
                        value={form.projectType}
                        onChange={(e) => update('projectType', e.target.value)}
                      >
                        <option value="" disabled>Select type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-white">{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        className="input-field"
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                      >
                        <option value="" disabled>Select budget</option>
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-white">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      className="input-field resize-none"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full justify-center">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
