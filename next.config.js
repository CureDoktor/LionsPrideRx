/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["static.legitscript.com"],
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, "styles")],
  },
};
module.exports = nextConfig;
