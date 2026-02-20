/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables toggling via class
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#6366f1',
        },
        background: {
          light: '#f9fafb',
          dark: '#1f2937',
        },
        text: {
          light: '#111827',
          dark: '#f9fafb',
        },
      },
    },
  },
  plugins: [],
};
