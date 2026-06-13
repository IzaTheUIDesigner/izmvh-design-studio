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
        'surface': '#FFFFFF',
        'surface-2': '#F5F0E8',
        'border': '#E5E0D8',
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
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
      }
    },
  },
  plugins: [],
}
