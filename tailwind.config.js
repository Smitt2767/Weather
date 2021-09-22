module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#E2560D",
        secondary: "#C83803",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#E2560D",
        secondary: "#C83803",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
