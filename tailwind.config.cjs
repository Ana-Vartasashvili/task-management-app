/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    colors: {
      darkBlue: '#111621',
      lightBlue: '#4590F9',
      textColor_darkGray: '#44403c',
      gray: '#9398A7',
      white: '#FFFFFF',
      textColor_lightGray: '#e3e3e3',
      buttonGray: '#f8fafc',
    },

    fontSize: {
      base: '16px',
      sm: '12px',
      md: '14px',
      lg: '18px',
      '2xl': '20px',
      '3xl': '24px',
    },

    extend: {
      width: {
        120: '30rem',
      },
      spacing: {
        120: '30rem',
      },
    },
  },
  plugins: [],
}
