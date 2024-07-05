/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-in': 'slide-in 1s ease-out',
      },
      colors: {
        'purple-dark': '#4B0082',
        'purple-light': '#9370DB',
        'blue-dark': '#00008B',
        'blue-light': '#1E90FF',
      },
    },
  },
  plugins: [],
}
