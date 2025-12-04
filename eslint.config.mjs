import globals from "globals";
import pluginJs from "@eslint/js";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      "prettier": prettierPlugin,
    }
  },
  {
    
    ignores: ['node_module', 'dist', '*.config.*'],
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      ...prettierPlugin.configs.recommended.rules,
      "prefer-const": 'error',
      "no-unused-vars": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/jsx-uses-react": "error", 
    },
  },
  // ...fixupConfigRules(pluginReactConfig)
];