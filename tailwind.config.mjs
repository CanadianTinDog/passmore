/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071322',
          light: '#0d2035',
          mid: '#102840',
        },
        gold: {
          DEFAULT: '#cfba89',
          light: '#ddd0a8',
          dark: '#b8a06a',
        },
        cream: '#f5f3ef',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
