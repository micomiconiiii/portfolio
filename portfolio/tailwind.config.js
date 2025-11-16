/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'main-bg': '#FEFEFE',
        'nav-text': '#3d3d3d',
      },
      fontSize: {
        'nav': '20pt',
        'nav-lg': '24pt',
      },
      backgroundImage: {
        'gradient-blur-1': 'linear-gradient(to right, #FFF380, #CA26FF)',
        'gradient-blur-2': 'linear-gradient(to right, #C2FFD8, #465EFB)',
        'text-gradient': 'linear-gradient(to right, #465EFB, #CA26FF)',
        'button-gradient': 'linear-gradient(to right, #E845A3, #C035FF)',
      }
    },
  },
  plugins: [],
}
