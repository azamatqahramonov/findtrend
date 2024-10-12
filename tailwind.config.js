/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        tablet: "771px",
        desktop: "1203px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          DEFAULT: "100%",
          tablet: "680px",
          desktop: "1280px",
        },
      },
    },
  },
  plugins: [],
};
