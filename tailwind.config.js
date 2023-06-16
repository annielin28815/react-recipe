const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: {
        500: '#f6d64f',
      },
      blue: {
        100: '#e8eff5',
        500: '#2f6695',
        gray: {
          100: '#bac6d1',
        }
      },
      red: {
        100: '#fae9e9',
      },
      djangoGreen: {
        900: '#0f3c2d'
      }
    },
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      width: {
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
      },
      lineHeight: {
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
      }
    },
  },
  plugins: [],
}

