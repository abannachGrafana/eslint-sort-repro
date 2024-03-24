module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:sort/recommended",
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
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // BEG: import sorting
    "import/no-duplicates": "error",
    "import/no-unresolved": "off",
    "sort/exports": "off",
    "sort/imports": [
      "error",
      {
        groups: [
          { order: 20, type: "side-effect" },
          { order: 30, regex: "^@grafana" },
          { order: 10, regex: "^react$" },
          { order: 15, type: "dependency" },
          { order: 50, regex: "^.+\\.s?css$" },
          { order: 40, type: "other" },
        ],
        separator: "\n",
      },
    ],
    "sort/string-enums": "error",
    "sort/string-unions": "error",
    "sort/type-properties": "error",
    // END: import sorting
  },
};
