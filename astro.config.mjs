// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

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

  integrations: [expressiveCode(), mdx(), pagefind()],
});
