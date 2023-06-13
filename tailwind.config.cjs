/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#000445",
        footer: "#00021E",
        navbar: "#010433",
        primary: "rgba(0, 2, 30, 0.8)",
        secondary: "#000328",
        yellow: "#FDD10E",
        gray: "rgba(234, 234, 234, 0.75)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        secure: ["Source Code Pro", "monospace"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      aspectRatio: {
        "4/3": "4/3",
      },
    },
  },
  plugins: [],
}
