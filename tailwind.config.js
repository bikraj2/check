/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        pC: '#96BB7C',
        sc: '#FFF2F3',
        tC: '#252B42',
        sTc: '#737373',
      },
    },
  },
  plugins: [],
};
