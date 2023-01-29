/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#003953",
        "default-gray-400": "#9ca3af",
        "extended-true-gray-300": "#d4d4d4",
        "extended-cool-gray-300": "#d1d5db",
        "default-yellow-400": "#fbbf24",
      },
      fontFamily: {
        "text-base-leading-6-font-medium": "Inter",
        montserrat: "Montserrat",
      },
    },
    fontSize: { sm: "16px", base: "18px" },
  },
  corePlugins: { preflight: false },
};
