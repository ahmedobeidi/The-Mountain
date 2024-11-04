/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../images/bg_header.jpg')",
        about: "url('../images/bg_nuage.jpg')",
        history: "url('../images/bg_appareil_photo.jpg')"
      },
      colors: {
        primary: {
          white: "hsl(36, 100%, 99%)",
          blue: "hsl(180, 57%, 49%)",
          pink: "hsl(345, 91%, 55%)",
          gray: "hsl(0, 0%, 33%)",
          "blue-light": "hsl(195, 69%, 76%)",
          "white-light": "#ffffff"
        },
      },
      fontFamily: {
        heading: ["Rokkitt", "sans-serif"],
        paragraph: ["Roboto", "sans-serif"]
      },
      fontSize: {
        paragraph: "15px",
      }
    },
  },
  plugins: [],
}

