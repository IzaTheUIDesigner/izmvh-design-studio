import type { Metadata } from 'next'
import ServicesPageClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web design, e-commerce development, UI/UX design, and ongoing website maintenance — everything your business needs online.',
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
