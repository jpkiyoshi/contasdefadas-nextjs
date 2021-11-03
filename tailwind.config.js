module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'contas-pink-main': '#ff9a8b',
        'contas-pink-dark': '#B35A6A',
        'contas-pink-light': '#FFB4C2',
        'contas-purple-dark': '#56001e'
      },
      fontFamily: {
        'contas-roboto': 'roboto slab'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
