/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'display': ['"Krona One"', 'sans-serif'],
      'body': ['Metrophobic', 'serif']
    },
    extend: {
      colors: {
        black: '#111',
        white: '#eee',
      }
    }
  },
  plugins: [],
};
