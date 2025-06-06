import type { Root } from "mdast";
import { execSync as defaultExecSync } from "node:child_process";
import type { VFile } from "vfile";

/**
 * This remark plugin adds a `lastModified` property to the frontmatter of a post.
 * See https://docs.astro.build/en/recipes/modified-time/
 */
export function remarkLastModifiedTime() {
  return function (_: Root, file: VFile) {
    const frontmatter = file.data.astro!.frontmatter!;
    if (!frontmatter) {
      throw new Error("Frontmatter not found");
    }

    frontmatter.lastModified = getLastModified(frontmatter, file.history[0]);
  };
}

export function getLastModified(frontmatter: Record<string, string>, filePath: string, exec = defaultExecSync): string {
  // If the overrideLastModified property is set, use it instead of the git log
  if (frontmatter.overrideLastModified) {
    return frontmatter.overrideLastModified;
  }

  // Otherwise, query `git` to see when the file was last modified
  const result = exec(`git log -1 --pretty="format:%cI" "${filePath}"`);
  return result.toString();
}
