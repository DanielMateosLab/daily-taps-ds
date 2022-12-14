/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-1": "rgb(var(--surface-1), <alpha-value>)",
        "surface-2": "rgb(var(--surface-2), <alpha-value>)",
        "on-surface-normal": "rgb(var(--on-surface-normal), <alpha-value>)",
        "on-surface-light": "rgb(var(--on-surface-light), <alpha-value>)",
        primary: "rgb(var(--primary), <alpha-value>)",
        "primary-contrast": "rgb(var(--primary-contrast), <alpha-value>)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
