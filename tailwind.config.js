const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#5EE088",
        secondary: "#87CEEB",
        accent: "#FFD966",
        darkcolor: "#1A2736",
        lightcolor: "#D5D8DE",
        textcolor: colors.slate['800'],
        menu: colors.gray['500'],
        headerbg: colors.gray['500']
      }
    }
  },
  plugins: []
};
