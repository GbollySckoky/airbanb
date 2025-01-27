/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        Blue: '#33A7FF',
        Gray: '#F5F5F5',
        lightGray: '#1A1A1A80',
        Gray100: '#1A1A1A99',
        Gold: '#FFC000',
        Black: '#1A1A1A'
      },
    },
  },
  plugins: [],
}