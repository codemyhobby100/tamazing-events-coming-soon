/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map Tailwind color utilities to custom CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add a stylish sans-serif font
        mono: ["Fira Code", "monospace"], // Optional: For any mono styles
      },
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [],
};
