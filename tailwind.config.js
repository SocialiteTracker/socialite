const tailwindcss = require('tailwindcss');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};