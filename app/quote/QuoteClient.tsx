'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, CheckCircle, Building, Layers, MonitorSmartphone, Banknote, CalendarClock, ClipboardList } from 'lucide-react'
import Button from '@/components/Button'

const steps = [
  { id: 1, label: 'Business', icon: <Building size={16} /> },
  { id: 2, label: 'Project Type', icon: <Layers size={16} /> },
  { id: 3, label: 'Requirements', icon: <MonitorSmartphone size={16} /> },
  { id: 4, label: 'Budget', icon: <Banknote size={16} /> },
  { id: 5, label: 'Timeline', icon: <CalendarClock size={16} /> },
  { id: 6, label: 'Review', icon: <ClipboardList size={16} /> },
]

const projectTypes = [
  { id: 'website', label: 'Website Design & Development', desc: 'A new or redesigned website for your business.' },
  { id: 'ecommerce', label: 'E-commerce Store', desc: 'An online store to sell your products or services.' },
  { id: 'uiux', label: 'UI/UX Design', desc: 'Wireframes, prototypes, and design systems.' },
  { id: 'maintenance', label: 'Maintenance & Support', desc: 'Ongoing care for an existing website.' },
  { id: 'brand', label: 'Brand Identity', desc: 'Logo, colour palette, and brand guidelines.' },
]

const features = [
  'Blog / News section', 'Contact form', 'Booking / Scheduling', 'Live chat',
  'Membership / Login', 'Photo gallery', 'Video integration', 'Newsletter signup',
  'Multi-language', 'Custom animations', 'Social media feeds', 'Maps integration',
]

const budgetRanges = [
  { id: 'b1', label: 'Under R 5,000', sub: 'Basic landing page' },
  { id: 'b2', label: 'R 5k – R 15k', sub: 'Small business site' },
  { id: 'b3', label: 'R 15k – R 30k', sub: 'Professional website' },
  { id: 'b4', label: 'R 30k – R 60k', sub: 'Advanced build' },
  { id: 'b5', label: 'R 60k+', sub: 'Enterprise / complex' },
  { id: 'b6', label: 'Not sure yet', sub: 'We can advise' },
]

const timelines = [
  { id: 't1', label: 'ASAP', sub: 'Within 2 weeks' },
  { id: 't2', label: '1 month', sub: 'Flexible but soon' },
  { id: 't3', label: '2–3 months', sub: 'Standard timeline' },
  { id: 't4', label: '3–6 months', sub: 'Larger project' },
  { id: 't5', label: 'No rush', sub: 'Planning ahead' },
]

export default function QuotePageClient() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    businessName: '',
    industry: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    projectDesc: '',
    pages: '',
    selectedFeatures: [] as string[],
    hasBranding: '',
    budget: '',
    timeline: '',
    notes: '',
  })

  const update = (key: string, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const toggleFeature = (f: string) => {
    const current = form.selectedFeatures
    update(
      'selectedFeatures',
      current.includes(f) ? current.filter((x) => x !== f) : [...current, f]
    )
  }

  const next = () => setStep((s) => Math.min(s + 1, 6))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <section className="pt-36 pb-28 max-w-3xl mx-auto px-6">
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-green-light mb-4 px-3 py-1 bg-green-DEFAULT/10 border border-green-DEFAULT/20 rounded-full">
          Get a Quote
        </span>
        <h1 className="text-4xl font-bold text-navy-DEFAULT leading-tight mb-3">
          Tell us about your project.
        </h1>
        <p className="text-navy-DEFAULT/60">We&apos;ll put together a tailored proposal within 48 hours — no obligation.</p>
      </div>

      {/* Progress Bar */}
      {!submitted && (
        <div className="mb-10">
          {/* Step indicators */}
          <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-1 flex-shrink-0">
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    step === s.id
                      ? 'bg-green-DEFAULT text-navy-DEFAULT glow-green-sm'
                      : step > s.id
                      ? 'bg-green-DEFAULT/10 text-green-light'
                      : 'bg-white border border-grey-DEFAULT/60 text-navy-DEFAULT/60'
                  }`}
                >
                  {s.icon}
                  <span className="hidden sm:block">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-4 h-px ${step > s.id ? 'bg-green-DEFAULT' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>
          {/* Progress line */}
          <div className="h-0.5 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-DEFAULT rounded-full"
              animate={{ width: `${((step - 1) / 5) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white border border-grey-DEFAULT/60 rounded-2xl p-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-DEFAULT/20 border border-green-DEFAULT/30 flex items-center justify-center mb-6 glow-green">
              <CheckCircle size={40} className="text-green-light" />
            </div>
            <h2 className="font-grotesk font-bold text-navy-DEFAULT text-3xl mb-3">Quote received!</h2>
            <p className="text-navy-DEFAULT/60 leading-relaxed max-w-sm mb-8">
              Thanks, {form.contactName || 'there'}! We&apos;ve received your brief and will put together a tailored proposal within <strong className="text-navy-DEFAULT">48 hours</strong>.
            </p>
            <div className="flex gap-3">
              <Button href="/" variant="secondary">Back to Home</Button>
              <Button href="/portfolio" arrow>View Our Work</Button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {/* STEP 1 – Business Info */}
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-6">About your business</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Business Name *</label>
                      <input type="text" required placeholder="Acme Corp" className="input-field" value={form.businessName} onChange={(e) => update('businessName', e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Industry</label>
                      <input type="text" placeholder="e.g. Real Estate, Retail" className="input-field" value={form.industry} onChange={(e) => update('industry', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Existing Website (if any)</label>
                    <input type="url" placeholder="https://yoursite.com" className="input-field" value={form.website} onChange={(e) => update('website', e.target.value)} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Your Name *</label>
                      <input type="text" required placeholder="Jane Smith" className="input-field" value={form.contactName} onChange={(e) => update('contactName', e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" required placeholder="jane@acme.com" className="input-field" value={form.email} onChange={(e) => update('email', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" placeholder="+27 00 000 0000" className="input-field" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 – Project Type */}
            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-6">What are you looking to build?</h2>
                <div className="space-y-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => update('projectType', pt.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                        form.projectType === pt.id
                          ? 'border-green-DEFAULT bg-green-DEFAULT/10 glow-green-sm'
                          : 'border-grey-DEFAULT/60 bg-grey-DEFAULT hover:border-grey-subtle'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${form.projectType === pt.id ? 'border-green-light bg-green-light' : 'border-grey-subtle'}`} />
                      <div>
                        <p className="text-navy-DEFAULT font-medium text-sm">{pt.label}</p>
                        <p className="text-navy-DEFAULT/60 text-xs">{pt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Briefly describe your project</label>
                  <textarea rows={3} placeholder="What does your business do? What problem are you solving?" className="input-field resize-none" value={form.projectDesc} onChange={(e) => update('projectDesc', e.target.value)} />
                </div>
              </motion.div>
            )}

            {/* STEP 3 – Requirements */}
            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-6">Website requirements</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Approx. number of pages</label>
                    <select className="input-field" value={form.pages} onChange={(e) => update('pages', e.target.value)}>
                      <option value="" disabled>Select</option>
                      {['1–3 pages', '4–6 pages', '7–12 pages', '13–20 pages', '20+ pages'].map(o => (
                        <option key={o} value={o} className="bg-white">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-3">Features needed (select all that apply)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {features.map((f) => (
                        <button
                          key={f}
                          onClick={() => toggleFeature(f)}
                          className={`px-3 py-2 rounded-lg text-xs text-left transition-all border ${
                            form.selectedFeatures.includes(f)
                              ? 'border-green-DEFAULT bg-green-DEFAULT/10 text-green-light'
                              : 'border-grey-DEFAULT/60 text-navy-DEFAULT/60 hover:border-grey-subtle hover:text-navy-DEFAULT'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Do you have existing branding?</label>
                    <div className="flex gap-3">
                      {['Yes — logo, fonts, colours', 'Partial — some assets', 'No — starting from scratch'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => update('hasBranding', opt)}
                          className={`flex-1 py-2.5 px-3 rounded-lg text-xs text-center border transition-all ${
                            form.hasBranding === opt
                              ? 'border-green-DEFAULT bg-green-DEFAULT/10 text-green-light'
                              : 'border-grey-DEFAULT/60 text-navy-DEFAULT/60 hover:border-grey-subtle'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4 – Budget */}
            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-2">What&apos;s your budget?</h2>
                <p className="text-navy-DEFAULT/60 text-sm mb-6">This helps us tailor our recommendation to what works for you.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {budgetRanges.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => update('budget', b.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        form.budget === b.id
                          ? 'border-green-DEFAULT bg-green-DEFAULT/10 glow-green-sm'
                          : 'border-grey-DEFAULT/60 bg-grey-DEFAULT hover:border-grey-subtle'
                      }`}
                    >
                      <p className="text-navy-DEFAULT font-grotesk font-semibold text-sm mb-0.5">{b.label}</p>
                      <p className="text-navy-DEFAULT/60 text-xs">{b.sub}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 5 – Timeline */}
            {step === 5 && (
              <motion.div key="step5" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-2">When do you need it?</h2>
                <p className="text-navy-DEFAULT/60 text-sm mb-6">Be realistic — great work takes time.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {timelines.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => update('timeline', t.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        form.timeline === t.id
                          ? 'border-green-DEFAULT bg-green-DEFAULT/10 glow-green-sm'
                          : 'border-grey-DEFAULT/60 bg-grey-DEFAULT hover:border-grey-subtle'
                      }`}
                    >
                      <p className="text-navy-DEFAULT font-grotesk font-semibold text-sm mb-0.5">{t.label}</p>
                      <p className="text-navy-DEFAULT/60 text-xs">{t.sub}</p>
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider mb-2">Anything else we should know?</label>
                  <textarea rows={4} placeholder="Additional context, references, goals, or questions..." className="input-field resize-none" value={form.notes} onChange={(e) => update('notes', e.target.value)} />
                </div>
              </motion.div>
            )}

            {/* STEP 6 – Review */}
            {step === 6 && (
              <motion.div key="step6" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-6">Review your brief</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Business', value: form.businessName || '—' },
                    { label: 'Contact', value: form.email || '—' },
                    { label: 'Project type', value: projectTypes.find(p => p.id === form.projectType)?.label || '—' },
                    { label: 'Pages', value: form.pages || '—' },
                    { label: 'Features', value: form.selectedFeatures.length ? form.selectedFeatures.join(', ') : 'None selected' },
                    { label: 'Budget', value: budgetRanges.find(b => b.id === form.budget)?.label || '—' },
                    { label: 'Timeline', value: timelines.find(t => t.id === form.timeline)?.label || '—' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-4 py-3 border-b border-grey-DEFAULT/60 last:border-0">
                      <span className="text-xs font-grotesk font-semibold text-navy-DEFAULT/60 uppercase tracking-wider w-28 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="text-sm text-navy-DEFAULT">{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Navigation Buttons */}
        {!submitted && (
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-grey-DEFAULT/60">
            <Button
              variant="secondary"
              onClick={back}
              disabled={step === 1}
            >
              <ChevronLeft size={16} />
              Back
            </Button>
            {step < 6 ? (
              <Button onClick={next} arrow>
                Next
                <ChevronRight size={16} />
              </Button>
            ) : (
              <Button onClick={async () => {
            try {
              await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
              })
            } catch (error) {
              console.error(error)
            }
            setSubmitted(true)
          }}>
                Submit Brief
                <CheckCircle size={16} />
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Trust note */}
      {!submitted && (
        <p className="text-center text-navy-DEFAULT/60 text-xs mt-6">
          Your information is kept private and never shared. We respond within 48 hours.
        </p>
      )}
    </section>
  )
}
