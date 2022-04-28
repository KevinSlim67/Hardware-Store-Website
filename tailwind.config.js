module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F6FF',
          100: '#EEEEFF',
          150: '#dddef3',
          200: '#DDDEFF',
          400: '#BCBEFD',
          600: '#31347B',
          700: '#53569C',
          800: '#273B4A',
          900: '#252B42',
        },

        secondary: '#F8F8FF',

        accent: {
          200: '#00edc5',
          400: '#00C9A7',
          600: '#00957C',
          800: '#205F52',
        },

        info: '#0090E1',

      }
    },

  },
  plugins: [],
}