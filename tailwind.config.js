/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-white': '#fbfbfb',
        'custom-black': '#000000',
        'custom-accent': '#13b4b6',
        'custom-accent-light': '#16cacc',
        'custom-gray': '#e8e8e8',
        'custom-dark-gray': '#4f4f4f'
      }
    },
    screens: {
      tiny: '375px',
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
};
