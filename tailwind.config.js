/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        primary: ["primary", "times-new-roman"],
        secondary: ["secondary", "roboto"],
      },

      colors: {
        primary: "#133e79",
        secondary: "#E0CEA9",
        accent: "#ABC9F3",
        white: "#DDDBDA",

        bgDark: "#1F1F1F",
        bgMedium: "#3b3b3b",
        bgLight: "#BDBDBD",
      },

      screens: {
        xs: "400px",
      },
    },
  },
};
