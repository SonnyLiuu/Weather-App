module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@react-native-community",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-native"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    semi: ["error", "never"],
    "comma-dangle": [2, "never"],
    "react/jsx-file-name-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false },
    ],
  },
};
