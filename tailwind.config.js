module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'contas-pink-main': '#ff9a8b',
        'contas-pink-dark': '#ff6a88',
        'contas-pink-light': '#ff99ac',
        'contas-purple-dark': '#56001e',

        
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
