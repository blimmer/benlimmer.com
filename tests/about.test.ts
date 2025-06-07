import { expect, test } from "@playwright/test";

test("about page loads", async ({ page }) => {
  await page.goto("/about");
  await expect(page).toHaveTitle("About | Ben Limmer");
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
});
