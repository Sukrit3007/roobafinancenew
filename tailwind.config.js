const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'sideways': 'sideways',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
       
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
