/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      clipPath: {
        curve: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
      },
    },
  },
  plugins: [],
};
