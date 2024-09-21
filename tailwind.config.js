/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./layouts/**/*.{js,ts,vue}",
    "./pages/**/*.{js,ts,vue}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: '#12202f',
        white: '#faf8ef',
        orange: '#df581e'
      }
    },
  },
  plugins: [],
}

