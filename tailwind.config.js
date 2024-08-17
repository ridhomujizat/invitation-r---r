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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomInCover: {
          '0%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out ',
        zoomInCover: 'zoomInCover 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
