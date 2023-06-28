/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B132B",
        secondary: "#1C2541",
        neutral: "#3A506B",
        "accent-primary": "#6FFFE9",
        "accent-secondary": "#5BC0BE",
      },
    },
  },
  plugins: [],
};
