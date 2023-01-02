const path = require("path");
module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
