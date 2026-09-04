import type { Metadata } from 'next'
import ContactPageClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Iza at IZMVH Design Studio — I'd love to hear about your business and what you're trying to achieve.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
