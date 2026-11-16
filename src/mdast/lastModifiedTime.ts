import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { defineMdastPlugin } from "satteri";

/**
 * Adds a `lastModified` property to the frontmatter of a post.
 * See https://docs.astro.build/en/recipes/modified-time/
 */
export const lastModifiedTimePlugin = defineMdastPlugin({
  name: "last-modified-time",
  before(_root, context) {
    const frontmatter = context.data.astro?.frontmatter;
    if (!frontmatter || !context.fileURL) {
      throw new Error("Frontmatter or file URL not found");
    }

    frontmatter.lastModified =
      frontmatter.overrideLastModified ??
      execFileSync("git", ["log", "-1", "--pretty=format:%cI", fileURLToPath(context.fileURL)], { encoding: "utf8" });
  },
});
