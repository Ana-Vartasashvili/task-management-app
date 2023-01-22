/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    colors: {
      black: '#000',
      darkBlue: '#111621',
      lightBlue: '#4590F9',
      lightBlue_hover: '#3b82f6',
      register_card_color: '#252525',
      register_card_font_color: '#f8fafc',
      textColor_darkGray: '#44403c',
      gray: '#9398A7',
      white: '#FFFFFF',

      textColor_lightGray: '#e3e3e3',
      buttonGray: '#f8fafc',
    },

    fontSize: {
      base: '1.6rem',
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.8rem',
      '2xl': '2rem',
      '3xl': '2.4rem',
      '4xl': '3rem',
      '5xl': '3.6rem',
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
