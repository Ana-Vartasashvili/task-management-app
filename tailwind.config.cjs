/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    colors: {
      white: '#FFFFFF',
      black: '#000',
      black_main: '#090909',
      text_black: '#1f2937',
      SignUp_card_color: '#252525',
      SignUp_card_font_color: '#f8fafc',
      gray: '#9398A7',
      textColor_lightGray: '#e3e3e3',
      textColor_darkGray: '#44403c',
      textColor_gray: '#8c9283',
      dark_gray: '#343a40',
      buttonGray: '#f8fafc',
      darkBlue: '#111621',
      lightBlue: '#4590F9',
      lightBlue_hover: '#3b82f6',
      main_purple: '#9a8cf3',
      dark_purple: '#837ce5',
      red: '#b91c1c',
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
