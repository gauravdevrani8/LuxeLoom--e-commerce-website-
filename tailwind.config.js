// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
        'permanent-marker': ['Permanent Marker', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poiret': ['Poiret One', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'rowdies': ['Rowdies', 'sans-serif'],



        

      },
    },
  },
  variants: {
    extend: {
      brightness: ["dark"], // Enables dark mode for brightness utility
    },
  },
  plugins: [],
  darkMode: "class", // Enables dark mode using class
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
