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
    define: {
      "import.meta.env.GITHUB_BRANCH": JSON.stringify(process.env.GITHUB_BRANCH || ""),
    },
  },

  build: {
    assets: "_assets",
  },

  // TODO: filter archived posts
  integrations: [expressiveCode(), mdx(), sitemap()],

  markdown: {
    remarkPlugins: [remarkLastModifiedTime],
  },
});
