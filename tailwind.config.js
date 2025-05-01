/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",  // Ensure it covers your project structure
    "./public/index.html",  // Add this if using a plain HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
