import { expect, test } from "@playwright/test";

const PORT = 4321;

test("homepage loads and shows hero text", async ({ page }) => {
  await page.goto(`http://localhost:${PORT}`);
  await expect(page.locator("body")).toContainText("Ben Limmer");
});
