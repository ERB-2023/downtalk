module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "{react*, react*/**}",
            group: "external",
            position: "before",
          },
          {
            pattern: "../**",
            group: "unknown",
            position: "after",
          },
          {
            pattern: "./**",
            group: "unknown",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "unknown"],
        "newlines-between": "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/export": "off",
    "react/react-in-jsx-scope": "off",
  },
};
