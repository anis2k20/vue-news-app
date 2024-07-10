/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "primary":'#53413E',
          "secondary":'#B5A2AC',
          'tertiary':'#EBDEE7',
          "quaternary":'#C9B6C2',
          "quinary":'#897777',
      },
        fontFamily: {
            'newsreader': ['Newsreader', 'serif'],
        }
    },
  },
  plugins: [],
}

