import { expect, test } from "@playwright/test";

// Ensure this test only runs on mobile browsers
// Desktop projects hide the mobile menu entirely.
test("hamburger menu toggles on mobile", async ({ page }, testInfo) => {
  if (!testInfo.project.name.includes("Mobile")) {
    test.skip();
  }

  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  const menu = page.locator("#mobile-menu");

  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toBeVisible();

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeHidden();
});
