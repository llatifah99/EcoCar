/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainColor: "#718697",
        navColor: "#F5F3F3",
        hoverColor: "#E37423",
      },
    },
  },
  plugins: [],
};
