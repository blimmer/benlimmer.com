import type { Root } from "mdast";
import { execSync } from "node:child_process";
import type { VFile } from "vfile";

/**
 * This remark plugin adds a `lastModified` property to the frontmatter of a post.
 * See https://docs.astro.build/en/recipes/modified-time/
 */
export function remarkLastModifiedTime() {
  return function (tree: Root, file: VFile) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro!.frontmatter!.lastModified = result.toString();
  };
}
