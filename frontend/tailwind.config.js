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
            background: "#ffffff",
            "background-dark": "#0d1117",
            foreground: "#24292f",
            "foreground-dark": "#c9d1d9",
            primary: "#0969da",
            "primary-dark": "#58a6ff",
            border: "#d0d7de",
            "border-dark": "#30363d",
            muted: "#57606a",
            "muted-dark": "#8b949e",
            accent: "#0969da",
            "accent-dark": "#58a6ff",
          },
          transitionDuration: {
            400: '400ms', // Customize transition duration
          },
          transitionProperty: {
            'colors': 'background-color, border-color, color', // Specify properties to transition
          },
      },
    plugins: [],
  }
}