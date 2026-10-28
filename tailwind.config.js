/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Same breakpoints the layout was designed with
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "0.75rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: { DEFAULT: "#6c757d", hover: "#5c636a" },
        success: { DEFAULT: "#198754", hover: "#157347" },
        light: "#f8f9fa",
      },
      // Fluid sizes that stop growing at 1200px
      fontSize: {
        h1: "min(calc(1.375rem + 1.5vw), 2.5rem)",
        h2: "min(calc(1.325rem + 0.9vw), 2rem)",
        h3: "min(calc(1.3rem + 0.6vw), 1.75rem)",
        h4: "min(calc(1.275rem + 0.3vw), 1.5rem)",
        h5: "1.25rem",
        h6: "1rem",
        "display-3": "min(calc(1.525rem + 3.3vw), 4rem)",
        "display-5": "min(calc(1.425rem + 2.1vw), 3rem)",
      },
    },
  },
  plugins: [],
};
