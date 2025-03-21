/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxHeight: {
        "screen-60": "calc(100vh - 60px)", // تعريف max-h-screen-60
      },
    },
  },
  plugins: [],
};
