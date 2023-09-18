/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "660px",
      lg: "992px",
      xl: "1440px",
    },
    colors: {
      primary: "#1cd8c9",
      title: "#222222",
      paragraph: "#333333",
      bg: "#ededef",
      bg2: "#0b0c11",
      bgbody: "#f4f4f4",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "24px"],
      base: ["16px", "26px"],
      lg: ["20px", "28px"],
      xl: ["24px", "30px"],
      "2xl": ["28px", "32px"],
      "3xl": ["32px", "34px"],
      "4xl": ["36px", "36px"],
    },

    extend: {
      boxShadow: {
        card: "0 5px 20px 2px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(1000px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        moveLeft: {
          "0%": { transform: "translateX(-1000px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        moveRight: "moveRight 1.5s ease-in-out",
        moveLeft: "moveLeft 1.5s ease-in-out",
      },
      flex: {
        33: "0 0 30%",
        50: "0 0 50%",
        66: "0 0 66.666666%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
