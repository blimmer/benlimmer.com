// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://benlimmer.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    assets: "_assets",
  },

  integrations: [expressiveCode(), mdx()],
});
