/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "regular" : ["Gilroy-Regular"],
        "medium" : ["Gilroy-Medium"],
        "semibold" : ["Gilroy-Semibold"],
        "bold" : ["Gilroy-Bold"]
      },
      colors: {
        primary: "#FE416F",
        stroke: "#EDEDED"
      },
      boxShadow: {
        intense: "0px 0px 16px rgba(17, 17, 26, 0.1)"
      }
    },
  },
  plugins: [],
}

