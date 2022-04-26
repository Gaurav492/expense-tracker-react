module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        2: 2,
      },
      colors: {
        "dark-main": "#3e4149",
        "dark-secondary": "#444f5a",
        "primary-orange": "#ff9999",
        "primary-orange-light": "#ffc8c8",
      },
    },
    screens: {
      xs: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
