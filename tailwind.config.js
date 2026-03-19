/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          25: '#f8fafc',
        },
        brand: {
          50: '#f3f8ff',
          100: '#e8f1ff',
          200: '#d3e5ff',
          300: '#a9cfff',
          400: '#79b2ff',
          500: '#428cf4',
          600: '#256cd6',
          700: '#1f58ad',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -24px rgba(15, 23, 42, 0.28)',
        card: '0 12px 30px -20px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(121,178,255,0.28), transparent 36%), radial-gradient(circle at 85% 15%, rgba(219,234,254,0.8), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(243,248,255,0.95))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.92' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.75s ease forwards',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
