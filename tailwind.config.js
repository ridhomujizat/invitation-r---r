/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-int": "url('/bg/cover.jpg')",
        "cover-int-frame": "url('/bg/cover.png')",
        current: "url('/bg/intro.png')",
        river: "url('/bg/river.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
        milonga: ["Milonga", "serif"],
        cormorant: ["Cormorant", "serif"],
      },
      colors: {
        primary: "#976C74",
      },
    },
  },
  plugins: [],
};
