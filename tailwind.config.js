/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './**/*.js',
    './**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '375': '375px',
      },
      spacing: {
        '0.5': '0.125rem',
      },
      borderRadius: {
        'button': '9999px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 