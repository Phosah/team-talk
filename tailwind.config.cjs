/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            1: "#DBE0EB",
            2: "#636F88",
            3: "#EBEEF4",
          },
          black: "#231F20",
          blue: {
            1: "#C3DFF8",
            2: "#1881DC",
          },
        },
      },
    },
  },
  plugins: [],
};
