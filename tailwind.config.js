/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
      },
      colors: {
        "doh-blue": "#273D4B",
        "gra-s": "#49CED8",
        "gra-e": "#59DEBB",
        "doh-text-gray": "#B8C0C8",
      },
    /*   gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      }, */
    },
  },
  plugins: [],
};
