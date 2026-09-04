import type { Metadata } from 'next'
import ServicesPageClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital audits, website development, launch, monthly digital care, and search & growth — a full digital lifecycle, not a one-off build.',
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
