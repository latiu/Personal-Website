/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },

    extend: {
      colors: {
        'light-blue': '#B8C6F6',
        'dark-blue': '#313352',
        'light-pink': '#FFD8EB'
      },

      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
