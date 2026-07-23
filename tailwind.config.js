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
      // Conteneur global : largeur cohérente et centrée sur tout le site
      // (bandeau, header, footer et contenu partagent la même largeur max).
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
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
      animation: {
        shimmer: 'shimmer 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
