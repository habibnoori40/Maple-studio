/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*{.html,.js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: "Monotype, sans-serif",
      },
      screens: {
        "3xl": "1600px",
        xs: "510px",
      },
      colors: {
        grayish: "#7C7C7C",
        "grayish-1": "#C1C6CC",
        "grayish-2": "#DADDE0",
        "grayish-3": "#6E7780",
        "grayish-4": "#DBDDE0",
        "grayish-5": "#ADADAD",
        "grayish-6": "#4D4D4D",
        blueish: "#4A97BF",
        "bright-orange": "#FF4400",
      },
      borderRadius: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
