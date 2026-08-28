import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SunLayer from '@/components/SunLayer'
import ShootingStars from '@/components/ShootingStars'

const THEME_SCRIPT = `
(function () {
  try {
    var hour = new Date().getHours();
    var theme = (hour >= 6 && hour < 18) ? 'day' : 'night';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`

export const metadata: Metadata = {
  title: {
    default: 'IZMVH Design Studio | Premium Web Design & Development',
    template: '%s | IZMVH Design Studio',
  },
  description: 'IZMVH Design Studio builds exceptional digital experiences — websites, e-commerce solutions, and ongoing support that help businesses grow online.',
  keywords: ['web design South Africa', 'web development', 'e-commerce development', 'UI/UX design'],
  authors: [{ name: 'IZMVH Design Studio' }],
  creator: 'IZMVH Design Studio',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://izmvh.co.za',
    title: 'IZMVH Design Studio',
    description: 'Designing digital experiences that grow businesses.',
    siteName: 'IZMVH Design Studio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets data-theme before paint, based on the visitor's local hour, to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- rule targets pages/_document.js; this is the App Router root layout, which is the supported place for global font links */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SunLayer />
        <ShootingStars />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
