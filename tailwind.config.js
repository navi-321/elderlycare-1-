/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        // New refined palette - Deep ocean meets warm coral
        'sage': {
          50: '#F8FAF8',
          100: '#EEF2EE',
          200: '#D5E0D5',
          300: '#A8C4A8',
          400: '#7BA37B',
          500: '#5A8A5A',
          600: '#436B43',
          700: '#2F4F2F',
          800: '#1F331F',
          900: '#122212',
        },
        'slate': {
          50: '#F7F8FA',
          100: '#EAEEF2',
          200: '#D2DBE4',
          300: '#AAB9C9',
          400: '#7A91A6',
          500: '#5A758B',
          600: '#455C70',
          700: '#384B5C',
          800: '#2D3E4C',
          900: '#1F2B36',
        },
        'coral': {
          50: '#FDF5F3',
          100: '#F9E8E3',
          200: '#F2D0C6',
          300: '#E8A894',
          400: '#DB7A5E',
          500: '#D05A3C',
          600: '#B34429',
          700: '#8F351F',
          800: '#6E2A19',
          900: '#4A1C10',
        },
        'sand': {
          50: '#FDFCFA',
          100: '#F8F6F1',
          200: '#EDE9E0',
          300: '#DDD6C8',
          400: '#B8ADA0',
          500: '#968B7E',
          600: '#756B61',
          700: '#5A5249',
          800: '#3D3732',
          900: '#26221E',
        },
        // Semantic aliases
        'primary': '#5A758B',
        'primary-deep': '#455C70',
        'accent': '#D05A3C',
        'accent-deep': '#B34429',
        'surface': '#F8F6F1',
        'surface-raised': '#EDE9E0',
        'text-primary': '#2D3E4C',
        'text-secondary': '#5A758B',
        'text-muted': '#7A91A6',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.6rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.8rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(45, 62, 76, 0.06)',
        'soft-md': '0 6px 32px rgba(45, 62, 76, 0.08)',
        'soft-lg': '0 12px 48px rgba(45, 62, 76, 0.1)',
        'accent': '0 6px 24px rgba(208, 90, 60, 0.15)',
      },
      borderRadius: {
        'card': '1rem',
        'btn': '0.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};