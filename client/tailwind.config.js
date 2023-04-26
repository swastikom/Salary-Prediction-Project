/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-lobster)", ...fontFamily.mono],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '500px',
        'md': [
          {'min': '668px', 'max': '767px'},
          {'min': '868px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }
    },
  },
  plugins: [],
}
