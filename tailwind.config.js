/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {},
    textShadow: {
      sm: '1px 1px 2px var(--tw-shadow-color)',
      DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
      lg: '4px 4px 8px var(--tw-shadow-color)',
      xl: '4px 4px 16px var(--tw-shadow-color)',
    }
  },
  plugins: [plugin(function ({ addComponents ,matchUtilities ,theme }) {

    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )

  })
],

}