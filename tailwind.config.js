/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeLeftToRight: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeRightToLeft: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marqueeLeftToRight: "marqueeLeftToRight 40s linear infinite",
        marqueeRightToLeft: "marqueeRightToLeft 30s linear infinite",
      },
      colors: {
        "light-grey": "#D3D3D3",
        primary: "#0C5220",
        secondary: "#D0F80C",
        "little-green": "#F9FFDA",
        primary2: "#1B8B3B",
      },
      fontFamily: {
        recoleta: ["Recoleta", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
