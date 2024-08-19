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
        pinyon: ["Pinyon Script", "cursive"],
        milonga: ["Milonga", "serif"],
        cormorant: ["Cormorant", "serif"],
        greetFibes: ["Great Vibes", "cursive"],
      },
      colors: {
        primary: "#976C74",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomInCover: {
          "0%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1.1)", opacity: "1" },
        },
        hiddenHight: {
          "0%": { height: "100vh" },
          "100%": { height: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out ",
        zoomInCover: "zoomInCover 1s ease-in-out",
        hiddenHight: "hiddenHight 1200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
