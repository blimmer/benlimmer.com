import process from "node:process";

const config = {
  "*.{js,ts,tsx,astro}": "eslint --fix",
  "*.{js,ts,tsx,astro,css,md,mdx}": "prettier --write",
};

if (process.platform === "darwin") {
  config["*.{jpg,jpeg,png}"] = "imageoptim";
}

export default config;
