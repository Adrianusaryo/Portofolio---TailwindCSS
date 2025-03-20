/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        untar: '#A90A2B',
        dark: '#0f172a',
        secondary: '#475569'
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

