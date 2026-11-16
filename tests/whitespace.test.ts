import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/about",
  "/freelance",
  "/freelance/contact",
  "/portfolio",
  "/resume",
  "/blog",
  "/blog/2021/01/29/circleci-jest-cache",
  "/this-page-does-not-exist",
];

// Formatters can wrap inline text onto its own line, which renders as underlined leading or trailing spaces.
for (const path of PAGES) {
  test(`underlined links on ${path} have no surrounding whitespace`, async ({ page }) => {
    await page.goto(path);

    const offenders = await page.locator("a").evaluateAll((links) =>
      links
        .filter((link) => [...link.childNodes].every((node) => node.nodeType === Node.TEXT_NODE))
        .filter((link) => getComputedStyle(link).textDecorationLine.includes("underline"))
        .map((link) => link.textContent ?? "")
        .filter((text) => text !== text.trim()),
    );

    expect(offenders).toEqual([]);
  });
}
