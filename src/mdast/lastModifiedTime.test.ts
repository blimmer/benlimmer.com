import type { SatteriAstroData } from "@astrojs/markdown-satteri";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { markdownToHtml } from "satteri";
import { lastModifiedTimePlugin } from "./lastModifiedTime.ts";

const POST = "src/content/blog/2021-01-29-circleci-jest-cache.mdx";

function lastModified(frontmatter: Record<string, unknown>) {
  const astro: SatteriAstroData = {
    frontmatter,
    headings: [],
    localImagePaths: new Set(),
    remoteImagePaths: new Set(),
  };
  markdownToHtml("Hello", { mdastPlugins: [lastModifiedTimePlugin], fileURL: pathToFileURL(POST), data: { astro } });
  return astro.frontmatter.lastModified;
}

test("uses the time of the file's last commit", () => {
  const lastCommit = execFileSync("git", ["log", "-1", "--pretty=format:%cI", POST], { encoding: "utf8" });
  assert.equal(lastModified({}), lastCommit);
});

test("prefers overrideLastModified from frontmatter", () => {
  assert.equal(lastModified({ overrideLastModified: "2020-01-01T00:00:00Z" }), "2020-01-01T00:00:00Z");
});
