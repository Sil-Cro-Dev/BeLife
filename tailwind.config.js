/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'padding-t': 'padding-top',
        'margin-t': 'margin-top',
      },
    },
  },
  plugins: [],
}
