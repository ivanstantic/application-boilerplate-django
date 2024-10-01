module.exports = {
  ident: "postcss",
  plugins: {
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      features: {
        "nesting-rules": false,
      },
      stage: 3,
    },
    "postcss-flexbugs-fixes": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
  },
  map: true,
};
