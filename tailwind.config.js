/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'], // For body text
        heading: ['var(--font-heading)', 'sans-serif'], // For headings
      },
      borderRadius: {
        lg: 'var(--radius)',                     // Large border radius
        md: 'calc(var(--radius) - 2px)',        // Medium border radius
        sm: 'calc(var(--radius) - 4px)',        // Small border radius
      },
      colors: {
        dominant: 'var(--dominant)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
