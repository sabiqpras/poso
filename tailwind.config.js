/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#515b5d",
        secondary: "#d2cbce",
        accent: "#706361",
        background: "#f4f6f5",
      },
      fontFamily: {
        primary: ["Roboto Condensed"],
        secondary: ["Roboto"],
      },
    },
  },
  plugins: [],
};
