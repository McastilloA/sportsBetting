/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E1FFEA",
          100: "#BDFED1",
          200: "#81FEA6",
          300: "#3FFD78",
          400: "#03F74C",
          500: "#02B83A",
          600: "#02922D",
          700: "#016F22",
          800: "#014C17",
          900: "#00230B",
          950: "#001406",
          deg: "#032114"
        }
      },
    },
  },
  plugins: [],
}

