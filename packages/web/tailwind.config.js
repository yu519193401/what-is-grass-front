module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        400: '400px',
      },
      width: {
        330: '330px',
      },
      padding: {
        40: '40px',
      },
      boxShadow: {
        sm: '0 15px 20px rgba(0,0,0,.8)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
