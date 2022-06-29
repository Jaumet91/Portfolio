module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        'background-inverted': '#23262f',
        primary: '#6de5b0',
        'primary-inverted': '#6e59a8',
        secondary: '#f3eeea',
        'secondary-inverted': '#3c3a50',
        btn: '#031926',
        'hover-1': '#fbf8f3',
        'hover-2': '#5e54c9',
        'hover-inverted': '#ffd166',
        toggle: '#a6a7ab',
      },
      screens: {
        md: '875px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
