import { parseFrontmatter } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import fs from "node:fs";
import path from "node:path";
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

  integrations: [
    expressiveCode(),
    mdx(),
    sitemap({
      filter: filterArchivedPostsFromSitemap,
    }),
  ],

  markdown: {
    remarkPlugins: [remarkLastModifiedTime],
  },
});

/**
 * Filter out archived blog posts from the sitemap.
 *
 * It would be nice to use `getCollection` or our custom helpers here, but they're not accessible
 * during the vite build process. See https://github.com/withastro/roadmap/discussions/1087 for
 * the feature request.
 */
function filterArchivedPostsFromSitemap(page: string): boolean {
  const isBlogPost = page.startsWith("https://benlimmer.com/blog/");
  if (!isBlogPost) {
    return true;
  }

  // Extract slug from URL
  const urlObject = new URL(page);
  const pathname = urlObject.pathname;

  // Transform slug: replace / with - (e.g., /blog/2010/10/17/foo -> 2010-10-17-foo)
  const slug = pathname
    .replace(/^\/blog\//, "")
    .replace(/\/$/, "")
    .replace(/\//g, "-");

  if (!slug) {
    return true;
  }

  const directFilePath = path.join(process.cwd(), "src", "content", "blog", `${slug}.mdx`);
  const indexFilePath = path.join(process.cwd(), "src", "content", "blog", slug, "index.mdx");

  let filePathToUse: string | undefined;
  if (fs.existsSync(directFilePath)) {
    filePathToUse = directFilePath;
  } else if (fs.existsSync(indexFilePath)) {
    filePathToUse = indexFilePath;
  } else {
    throw new Error(
      `Error: Could not find MDX file for blog post with slug '${slug}'.\nChecked: \n- ${directFilePath}\n- ${indexFilePath}`,
    );
  }

  const fileContent = fs.readFileSync(filePathToUse, "utf8");
  const { frontmatter } = parseFrontmatter(fileContent);
  const isArchived = frontmatter.archive === true;
  return !isArchived;
}
