module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/*.js", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontSize: {
      'xxs': '.5rem'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'orange': "#f58120",
        'blue': '#1eb0e0',
        'darkdrop': '#0d3555',
        'bg-darkdrop-1': '#062945',
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
