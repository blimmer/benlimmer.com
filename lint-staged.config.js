import process from "node:process";

const config = {
  "*.{ts,tsx,astro,md,mdx}": "eslint --fix",
  "*.{ts,tsx,astro,css,md,mdx}": "prettier --write",
  "*.js": "eslint --fix",
  "*.{js,css,md}": "prettier --write",
};

if (process.platform === "darwin") {
  config["*.{jpg,jpeg,png}"] = "imageoptim";
}

export default config;
