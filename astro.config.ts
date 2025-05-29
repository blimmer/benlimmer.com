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

  const fileContent = getBlogPostContent(slug);
  const { frontmatter } = parseFrontmatter(fileContent);
  const isArchived = frontmatter.archive === true;
  return !isArchived;
}

/**
 * Get the content of a blog post file by slug.
 * Handles case-insensitive file matching for cross-platform compatibility.
 */
function getBlogPostContent(slug: string): string {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");

  // Try exact case matches first
  const directPath = path.join(blogDir, `${slug}.mdx`);
  if (fs.existsSync(directPath)) {
    return fs.readFileSync(directPath, "utf8");
  }

  const indexPath = path.join(blogDir, slug, "index.mdx");
  if (fs.existsSync(indexPath)) {
    return fs.readFileSync(indexPath, "utf8");
  }

  // Fall back to case-insensitive search
  const files = fs.readdirSync(blogDir, { withFileTypes: true });

  // Check for direct .mdx files
  for (const file of files) {
    if (file.isFile() && file.name.toLowerCase() === `${slug.toLowerCase()}.mdx`) {
      return fs.readFileSync(path.join(blogDir, file.name), "utf8");
    }
  }

  // Check for directories with index.mdx
  for (const file of files) {
    if (file.isDirectory() && file.name.toLowerCase() === slug.toLowerCase()) {
      const indexPath = path.join(blogDir, file.name, "index.mdx");
      if (fs.existsSync(indexPath)) {
        return fs.readFileSync(indexPath, "utf8");
      }
    }
  }

  throw new Error(`Could not find blog post with slug '${slug}'`);
}
