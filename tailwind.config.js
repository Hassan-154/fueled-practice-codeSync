/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/2': '0.5px',
      },
      maxWidth: {
        menu: '260px',
      },
      colors: {
        'Fueled-Red': 'var(--Fueled-Red, #AE0000)',
      },
      spacing: {
        'input': '11.5px',
        'menu': '9px',
      },
      borderColor: {
        'input': 'rgba(0, 0, 0, 0.10)',
      },
      backgroundColor: {
      'Fueled-Red': 'var(--Fueled-Red, #AE0000)',
      'header-button' : 'rgba(245, 245, 241, 0.20)',
      'main-background' : 'var(--Fueled-White, #F5F5F1)',
      'answer' : 'rgba(0, 0, 0, 0.04)',
      'line' : 'var(--Fueled-White, #F5F5F1)'
    },
    boxShadow: {
      'box': '0px 4px 8px 2px rgba(0, 0, 0, 0.16)',
    },
     fontSize: {
        'headerHeading': '16.5px',
        'input': '16.5px',
        'dropDown': '14.5px',
        'buttonText' : '13.5px',
        'buttonSave' : '14.5px',
        'heading' : '14px'
     }
    },
  },
  plugins: [],
}
