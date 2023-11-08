/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      'Fueled-Red': 'var(--Fueled-Red, #AE0000)',
      'header-button' : 'rgba(245, 245, 241, 0.20)'
    },
    boxShadow: {
      'box': '0px 4px 8px 2px rgba(0, 0, 0, 0.16)',
    },
     fontSize: {
        'headerHeading': '16.5px',
     }
    },
  },
  plugins: [],
}