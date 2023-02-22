/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        primary: {
          100: 'green',
          200: 'yellow'
        }
        
      },
      fontFamily: {
        body: ['Zilla slab'],
        heading: ['Anton'],
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}
