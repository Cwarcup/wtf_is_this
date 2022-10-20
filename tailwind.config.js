/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        eggshell: '#F4F1DE',
        terraCotta: '#E07A5F',
        darkBlue: '#3D405B',
        greenSheen: '#81B29A',
        deepChampagne: '#F2CC8F',
      },
    },
  },
  plugins: [],
}
