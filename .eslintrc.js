module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb", // Or your chosen style guide
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in Vite
    "react/prop-types": "off", // Optional if you don’t use PropTypes
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
