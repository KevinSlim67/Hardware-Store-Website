module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EEEEFF',
          200: '#DDDEFF',
          400: '#BCBEFD',
          600: '#31347B',
          700: '#53569C',
          900: '#273B4A',
        },

        secondary: '#F8F8FF',

        accent: {
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