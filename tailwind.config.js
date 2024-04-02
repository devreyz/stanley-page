const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: colors.green[700],
        secondary: "#87CEEB",
        accent: colors.amber[500],
        darkcolor: "#1A2736",
        lightcolor: "#D5D8DE",
        textcolor: colors.slate['800'],
        menu: colors.gray['500'],
        headerbg: colors.slate['900']
      },
      dropShadow: {
        'blur-neon': '0 0 5px rgba(10, 250, 200, 1)'
        
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
