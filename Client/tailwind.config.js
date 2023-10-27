/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgblue':'rgb(3, 3, 6)',
      'mygreen':'#01d020',
     }),
     textColor: theme => ({
      ...theme('colors'),
      'mygreen':'#01d020',
     }),
    extend: {},
  },
  plugins: [],
}

