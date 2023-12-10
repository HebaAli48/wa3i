/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#095EB2",
        "secondary":"#2EE5C2",
        "babyBlue":"#78D5D7",
        "eldery":"#07A0A0 ",
        "parents":"#DB7575",
        
      }
    },
    fontFamily: {
      'sans':['Almarai', ...defaultTheme.fontFamily.sans]
    }
    
  },
  plugins: [
    
  ],
}