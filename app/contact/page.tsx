import type { Metadata } from 'next'
import ContactPageClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with IZMVH Design Studio. We'd love to hear about your project.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
