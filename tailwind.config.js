/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkGray": "#212121",
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
}
