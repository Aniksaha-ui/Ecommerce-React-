module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#23324a",
          secondary: "#05211a",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "blue-100": "",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
};
