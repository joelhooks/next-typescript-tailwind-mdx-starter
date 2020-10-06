module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
