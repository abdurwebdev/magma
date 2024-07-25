// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px', // small
        'md': '768px', // medium
        'lg': '1024px', // large
        'xl': '1280px', // extra-large
        '2xl': '1536px', // double extra-large
      },
    },
  },
  plugins: [],
}
