/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(1, 90%, 64%)",
        primaryBlue: "hsl(219, 85%, 26%)",
  
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralVeryLightGrayishBlue: "hsl(210, 60%, 98%)",
        neutralLightGrayishBlue1: "hsl(211, 68%, 94%)",
        neutralLightGrayishBlue2: "hsl(205, 33%, 90%)",
        neutralGrayishBlue: "hsl(219, 14%, 63%)",
        neutralDarkGrayishBlue: "hsl(219, 12%, 42%)",
        neutralVeryDarkBlue: "hsl(224, 21%, 14%)",
  
      },
    },
  },
  plugins: [],
}
