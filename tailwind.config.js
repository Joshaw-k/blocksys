/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passion: ["Passion One", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
