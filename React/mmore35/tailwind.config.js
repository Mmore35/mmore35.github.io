module.exports = {
  //mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'BackGround': {
          100: '#272b2c'
        },
        'General': {
          100: '#ece8fd',
          200: '#0078d7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}