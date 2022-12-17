/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
const arr = [2012, 2013, 2005, 2005, 2021, 2008, 2017]
const arr1 = arr.sort((a, b) => b - a)
console.log(arr1)