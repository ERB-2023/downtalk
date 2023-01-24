const path = require("path");
module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID:
      "711669689345-cf2k0b3jrg15065cgrme3bv58lqqqd9l.apps.googleusercontent.com",
  },
  experimental: {
    transpilePackages: ["ui"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
