/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Open Sans',
      },
    },
  },
  plugins: [],
}

