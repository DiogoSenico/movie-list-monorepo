const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        primary: {
          dark: '#012433',
          vivid: '#0B749B',
          active: '#00BAFF',
          title: '#386071',
          text: '#536B7A',
          highlight: '#21B3CF'
        },
        fadded: {
          DEFAULT: '#78849E66',
          text: '#78849E',
        },
        'table-separator': '#9AAEBB',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '4rem',
        sm: '4rem',
        lg: '8rem',
        xl: '12rem',
        '2xl': '20rem',
      },
    },
  },
  plugins: [],
};
