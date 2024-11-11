/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #ff9900", // Example color
        secondary: "#ff7300", // Example color
        btnBg: "#e68900",
        accent1: "#1a202c", // New color
        accent2: "#2d3748", // New color
        accent3: "#f7dc61", // New color
        accent4: "#8bc34a", // New color
        background: "#faf9f6", // New color
        light: "#FBF5DF",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"], // Primary font
        serif: ["Merriweather", "serif"], // Complementary font
      },
      fontSize: {
        sm: "0.875rem", // Example size
        base: "1rem", // Example size
        lg: "1.125rem", // Example size
        xl: "1.25rem", // Example size
      },
    },
  },
  plugins: [],
};

