module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        red: '#403dbc',
        blue: '#007ce0',
        blue2: 'aliceblue',
        orange: 'orange',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-question-mark'),
  ],
}
