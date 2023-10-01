/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moss-green": "#008036",
        "moss-green-light": "#51a774",
        green: {
          50: "#DBFFEA",
          100: "#B3FFD2",
          200: "66FFA6",
          300: "#1AFF79",
          400: "#00CC55",
          500: "#008036",
          600: "#00662A",
          700: "#004D20",
          800: "#003315",
          900: "#00190B",
          950: "#000F06",
        },
      },
    },
  },
  plugins: [],
};
