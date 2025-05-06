// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import { remarkLastModifiedTime } from "./src/remark/lastModifiedTime";

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

  integrations: [expressiveCode(), mdx(), sitemap()],

  markdown: {
    remarkPlugins: [remarkLastModifiedTime],
  },
});
