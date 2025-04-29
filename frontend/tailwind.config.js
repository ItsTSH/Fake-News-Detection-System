/** @type {import('tailwindcss').Config} */

export default {
    darkMode: "class",
    content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            primary: 'rgba(var(--primary))',
            active: 'rgba(var(--active))',
            filled: 'rgba(var(--filled))',
            background: 'rgba(var(--background))',
            secondary: 'rgba(var(--secondary))',
            accentClr: 'rgba(var(--accent))',
            textClr: 'rgba(var(--text))',
            navbar: 'rgba(var(--navbar))',
          },
          transitionDuration: {
            500: '500ms', 
          },
          transitionProperty: {
            'colors': 'background-color, border-color, color', 
          },
      },
    plugins: [],
  }
}