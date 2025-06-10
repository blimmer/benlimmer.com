import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// TODO: Write real tests
test("should have a title", async ({ page }) => {
  await expect(page).toHaveTitle("Ben Limmer");
});

test("should have a header", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Ben Limmer" })).toBeVisible();
});

test("should show hero section", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Work with Me" })).toBeVisible();
});

test("can navigate to blog from homepage", async ({ page }) => {
  await page.getByRole("link", { name: "View all blog posts" }).click();
  await expect(page).toHaveURL(/\/blog/);
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});
