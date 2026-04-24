/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0e7065', // Dark teal
          light: '#258f84', // Light teal
          accent: '#e69882', // Peach accent
        },
        background: {
          start: '#fdfbf7', // Off-white/cream top
          end: '#e6ece9', // Light grey-green bottom
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
