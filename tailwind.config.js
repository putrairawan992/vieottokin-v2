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
        'blue-light': '#20bfef',
        'blue-space': '#0c4596',
        'blue-strom': '#6493b9',
        'darkdrop': '#0d3555',
        'darkdrop-1': '#062945',
        'softdrop': '#0f4875',
        'grey-icon': '#333',
        'grey-stone': '#999',
        'grey-blue': '#7e8692',
      }
    },
  },
  options: {
    whitelist: []
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
