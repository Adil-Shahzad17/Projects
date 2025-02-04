/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mm: "420px", // Custom breakpoint for 420px
      },
      colors: {
        "button-color": "#006d77", // Custom button color
      },
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "#f87171" }, // red-400
          "25%": { backgroundColor: "#fbbf24" }, // amber-400
          "50%": { backgroundColor: "#34d399" }, // green-400
          "75%": { backgroundColor: "#60a5fa" }, // blue-400
          "100%": { backgroundColor: "#f87171" }, // red-400 again
        },
      },
      animation: {
        colorChange: "colorChange 5s infinite",
      },
    },
  },
  plugins: [],
};
