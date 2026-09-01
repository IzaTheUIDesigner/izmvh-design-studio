const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'surface-2': '#F5F0E8',
        'border': '#E5E0D8',
        // Theme-aware tokens: values come from CSS variables in globals.css,
        // which flip under [data-theme="day"]. Same class names work in both themes.
        dark: 'var(--dark)',
        accent: {
          DEFAULT: 'var(--accent)',
        },
        heading: 'var(--heading)',
        muted: 'var(--muted)',
        // Card/surface background, distinct from the page bg (--dark) — the
        // Craftivo-style "boxed element" tone (their --surface-color).
        surface: 'var(--surface)',
        green: {
          DEFAULT: '#0F5C4A',
          dark: '#0D3D2E',
          light: '#1A8C6B',
          glow: 'rgba(15,92,74,0.15)',
        },
        navy: {
          DEFAULT: '#12183A',
          light: '#1E2A5E',
        },
        grey: {
          DEFAULT: '#F5F0E8',
          muted: '#6B7280',
          subtle: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        grotesk: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(15,92,74,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(15,92,74,0.25)' }
        }
      },
      backgroundImage: {
        'green-glow': 'radial-gradient(ellipse at center, rgba(15,92,74,0.08) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(15,92,74,0.08) 0%, transparent 60%)',
        'accent-glow': 'radial-gradient(ellipse at center, rgb(var(--accent-rgb) / 0.08) 0%, transparent 70%)',
      }
    },
  },
  plugins: [
    // `day:` variant applies whenever an ancestor has data-theme="day" (set on <html>
    // based on the visitor's local time). Default/unprefixed classes remain the night theme.
    plugin(function ({ addVariant }) {
      addVariant('day', '[data-theme="day"] &')
    }),
  ],
}
