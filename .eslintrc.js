require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "@vue/typescript/recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ["vue", "import", "@typescript-eslint"],
  ignorePatterns: [
    "dist",
    "coverage",
    "node_modules",
    "src/types/api.ts",
    "src/types/auto-imports.d.ts",
    "src/types/auto-components.d.ts",
  ],
  rules: {
    "no-console": ["error", { allow: ["debug", "error"] }],
    "vue/no-restricted-syntax": [
      "error",
      {
        /** @see https://astexplorer.net */
        selector:
          '[expression.name="$console"],[callee.object.name="$console"],[expression.object.name="$console"]',
        message:
          "Remove after use immediately. It will not be removed at build.",
      },
    ],
    "import/newline-after-import": "error",
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
    "vue/require-explicit-emits": "off",
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["**/*/pages/*"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ["tsconfig.json"],
      },
    },
  },
};
