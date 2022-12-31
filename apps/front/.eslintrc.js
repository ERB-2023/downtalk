module.exports = {
  root: true,
  extends: ["custom"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
