/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },theme: {
    extend: {
      width: {
        'img-calc': 'calc(100% - 1rem)',
      },

    },
  },
  plugins: [],
}

