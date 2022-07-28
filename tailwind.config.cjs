/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        wave1: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(300px)' },
        }
      },
      animation: {
        'waving-hand': 'wave .5s ease-out',
        'waving-hand1': 'wave1 .4s ease-out',
      },
    },
    fontFamily: {
      'montserrat': 'montserrat'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
