const tailwindcss = require('tailwindcss');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: '#355070',
        purple: '#6d597a',
        magenta: '#b56576',
        pink: '#e56b6f',
        beige: '#eaac8b',
        lightpurple: '#E0DAE4'
      }
    }
  }
};