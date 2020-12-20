module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/*.js", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        'xxs': '.5rem'
      },
      colors: {
        'orange': "#f58120",
        'blue': '#1eb0e0',
        'darkdrop': '#0d3555',
        'darkdrop-1': '#062945',
        'softdrop': '#0f4875',
      }
    },
  },
  options: {
    whitelist: []
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
