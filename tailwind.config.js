import colors from 'tailwindcss/colors'

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
        secondary: {
          ...colors.slate,
          DEFAULT: colors.slate[800],
        },
        primary: {
          ...colors.violet,
          DEFAULT: colors.violet[500],
        },
        title: {
          dark: colors.slate[800],
          light: colors.blue[900],
        },
        button: {
          primary: {
            dark: colors.gray[800],
            light: colors.violet[500],
          },
          dark: colors.slate[800]
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
