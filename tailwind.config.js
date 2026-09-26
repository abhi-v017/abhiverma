/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-averia)', 'serif'],
        sans: ['var(--font-poppins)', 'sans-serif'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      colors: {
        cream: "#FAF7F2",
        paper: "#F4ECE0",
        card: "#FFFCF6",
        coral: "#D97757",
        terra: "#C96F4C",
        ink: "#332E29",
        "ink-soft": "#736a60",
        accent: "#D97757", // Set to coral
        surface: "#FFFCF6",
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
