/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        secondry: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
        third: "#EEEEEE",
        blue: " #0075ff",
        blue2: "#0d69d5",
        orange: "#f59e0b",
        green: "#22c55e",
        red: "#f44336",
        grey: "#888",
      },
      fontFamily: {
        bodyfont: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
