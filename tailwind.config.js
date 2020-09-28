module.exports = {
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    transitionProperty: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
