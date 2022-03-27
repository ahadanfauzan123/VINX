const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme': 'var(--background)',
        'themeSecondary': 'var(--background-secondary)',
        'cardTheme': 'var(--card-background)',
        'color': 'var(--t-color-theme)',
        'colorProduct': 'var(--t-color-product)',
        'inputTheme': 'var(--input-theme)',
        'colorInput': 'var(--t-input-color-theme)',
        'barTheme': 'var(--bar-background)',
        'navTheme': 'var(--nav-background)',
        'lcolor': 'var(--t-label-color)',
      }
    },
    screens: {
      'mobile': '340px',
      // => @media (min-width: 350px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      ...defaultTheme.screens,
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}
