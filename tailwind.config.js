// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'script': ['Dancing Script', 'cursive'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'robotoFlex': ['Roboto Flex', 'sans-serif'],
        'serif-display': ['Noto Serif Display', 'serif'],
        'genos': ['Genos', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],


        

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
