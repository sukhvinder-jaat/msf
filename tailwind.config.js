/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        attorneys: "url('/assets/images/background/refer.webp')",
        hero: "url('/assets/images/background/hero.webp')",
        contact: "url('/assets/images/background/contact.webp')",
      },
      fontFamily: {
        Bahnschrift: ["Bahnschrift", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxl: "22px",
        "4xl": "38px",
        "6xl": "50px",
        "8xl": "80px",
      },
      colors: {
        orange: "#CD520F",
        slat: "#2B587F",
        dustWhite: "#B2B2B2",
        darkWhite: "#E5E5E5",
        darkBlue: "#2B587F40",
        lightBlack33: "#333333",
        lightBlack: "#4D4D4D",
        lightGray: "#26292B",
        baba: "#BABABA",
        borderBlack: "#303030",
        grayBlack: "#191919",
        whiteDustC: "#CCCCCC",
        whiteDustAD: "#ADADAD",
      },
    },
  },
  plugins: [],
};
