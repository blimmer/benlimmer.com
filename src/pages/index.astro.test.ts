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
