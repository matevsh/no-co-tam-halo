import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.teal, DEFAULT: colors.teal[600] },
      },
    },
  },
  plugins: [],
}
