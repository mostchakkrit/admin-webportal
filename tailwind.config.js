const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

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
    screens: {
      xs: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
      backgroundImage: {
        "login-img":
          "url('" + basePath + "/images/login/girl-practicing-yoga.png')",
        "steps-banner":
          "url('" +
          basePath +
          "/images/stepsImg/bg-banner.png'),linear-gradient(to right, #49CED8, #59DEBB)",
        "contact-banner": "url('" + basePath + "/images/contact/banner.png')",
      },
      /*   gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      }, */
    },
  },
  plugins: [require("flowbite/plugin")],
};
