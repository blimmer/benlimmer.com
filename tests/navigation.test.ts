import { expect, test } from "@playwright/test";

const links = [
  { text: "About", path: "/about" },
  { text: "Freelance", path: "/freelance" },
  { text: "Blog", path: "/blog" },
  { text: "Portfolio", path: "/portfolio" },
];

test.describe("header navigation", () => {
  for (const { text, path } of links) {
    test(`${text} link navigates to page`, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("link", { name: text }).first().click();
      await expect(page).toHaveURL(new RegExp(path));
    });
  }
});
