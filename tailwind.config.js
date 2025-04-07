/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,vue}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '375': '375px',
      },
      borderRadius: {
        'button': '9999px',
      }
    },
  },
  plugins: [],
} 