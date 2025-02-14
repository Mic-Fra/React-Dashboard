/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,tx,tsx}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'linear': 'linear',
        'ease-in-out-quad': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)', // Example custom timing function
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Inter',  'Arial', 'sans-serif'], // Add your custom font here
        serif: ['Georgia', 'serif'],           // Example for serif font
      },
    },
  },
  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional plugins
  ],
  variants:{},
  plugins: [require('@tailwindcss/forms')],
}
