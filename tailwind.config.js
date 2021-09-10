module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { 
      'display': ['Hina Mincho', 'serif'],
      'body': ['"Hina Mincho"'],
    },
    extend: {
      backgroundImage: theme => ({
        'whatwedo': "url('./images/banner1.png')"
        // 'premium': "url('./images/bg2.png')",
       })
    },
  },
  variants: {
    extend: {
      backgroundImage:['responsive','hover','focus'],
    },
  },
  plugins: [],
}
