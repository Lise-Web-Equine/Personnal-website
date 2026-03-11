export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eceff3',
          100: '#d8dfe8',
          200: '#b8c4d6',
          300: '#98a9c4',
          400: '#788eb2',
          500: '#745bd8',
          600: '#5d49b0',
          700: '#463788',
          800: '#2f2560',
          900: '#181338',
          950: '#0c091c',
        },

      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
