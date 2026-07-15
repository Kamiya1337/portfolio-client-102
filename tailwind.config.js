/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          sidebar: '#2C1E2B',
          'sidebar-border': '#3E2C3D',
          navy: '#352233',
          'hero-blue': '#8D7794',
          blue: '#8D7794',
          cyan: '#DACBE8',
          'blue-light': '#D7CCE6',
          background: '#FAF8FC',
          card: '#FFFFFF',
          ink: '#2C1E2B',
          muted: '#8D7794',
          border: '#E8E6F0',
          warning: '#E2B4BD',
        }
      }
    },
  },
  plugins: [],
}
