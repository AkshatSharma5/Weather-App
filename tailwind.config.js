/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '460px',
        'xxs': '200px',
      },
      colors: {
        prim: "#2edce0",
        sec:"blue-500",
        primdk: "#0a4f4f",
        secdk:"#204178",
        'darken':"#00000078",
      },
      fontFamily:{
        'mainn':['Merienda','cursive'],
        'secon':['Poppins','serif'],
        "official":["Cormorant Upright",'serif'],
        'roboto':['Roboto','sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
