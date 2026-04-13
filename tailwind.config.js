/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ea580c',
          hover: '#c2410c',
          light: '#fff7ed',
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        dark: {
          DEFAULT: '#111827',
          2: '#1f2937',
          3: '#374151',
          bg: '#0a0f1a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
        scrollLogos: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        pulseRing: {
          '0%': { opacity: 0.8, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(2.5)' },
        },
        fadeInDown: {
          from: { opacity: 0, transform: 'translateY(-6px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        dash: {
          'to': { strokeDashoffset: -24 }
        },
        flowUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        networkPulse: {
          '0%': { opacity: 0.3, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
          '100%': { opacity: 0.3, transform: 'scale(0.8)' },
        }
      },
      animation: {
        blink: 'blink 2s infinite',
        scrollLogos: 'scrollLogos 28s linear infinite',
        pulseDot: 'pulseDot 2.5s ease-in-out infinite',
        pulseRing: 'pulseRing 2.5s ease-in-out infinite',
        fadeInDown: 'fadeInDown 0.15s ease',
        slideInRight1: 'slideInRight 0.5s ease both',
        slideInRight2: 'slideInRight 0.5s 0.1s ease both',
        slideInRight3: 'slideInRight 0.5s 0.2s ease both',
        fadeIn: 'fadeIn 0.5s ease both',
        float: 'float 4s ease-in-out infinite',
        floatReverse: 'floatReverse 4s ease-in-out infinite',
        floatFast: 'float 2.5s ease-in-out infinite',
        spinSlow: 'spin 12s linear infinite',
        dash: 'dash 1.5s linear infinite',
        flowUp: 'flowUp 2s linear infinite',
        scan: 'scan 2.5s linear infinite',
        networkPulse: 'networkPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
