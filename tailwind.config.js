/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-180': 'linear-gradient(180deg, rgb(244, 244, 244), rgba(244, 244, 244, 0) 100%)',
        'custom-gradient-270': 'linear-gradient(270deg, rgb(255, 0, 0) 0%, rgb(255, 137, 56) 100%)',
      },
    },
  },
  plugins: [],
}

