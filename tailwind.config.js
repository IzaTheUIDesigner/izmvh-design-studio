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
        // Theme-aware tokens: values come from CSS variables in globals.css,
        // which flip under [data-theme="day"]. Same class names work in both themes.
        dark: 'var(--dark)',
        accent: {
          DEFAULT: 'var(--accent)',
        },
        heading: 'var(--heading)',
        muted: 'var(--muted)',
        // Card/surface background, distinct from the page bg (--dark).
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        grotesk: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid statement sizes for hero/section headings — tight scale,
        // scales smoothly between mobile and desktop instead of jumping
        // between fixed breakpoint sizes.
        statement: ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'statement-lg': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: '7rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
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
