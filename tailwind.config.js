/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          hover: '#1a1a1a', // Slightly lighter black for hover
        },
        accent: {
          DEFAULT: '#FFD600', // Yellow
          hover: '#FFED4E', // Lighter yellow for hover
        },
        dark: '#000000', // Black
        light: '#FFFFFF', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
