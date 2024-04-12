/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        typography: {
            primary: "Montserrat",
            secondary: "Source Sans 3",
        },
        extend: {
            colors: {
                primary: "#133e79",
                secondary: "#E0CEA9",
                accent: "#ABC9F3",
                white: "#DDDBDA",

                bgDark: "#1F1F1F",
                bgMedium: "#3b3b3b",
                bgLight: "#BDBDBD",
            },
        },
    },
};
