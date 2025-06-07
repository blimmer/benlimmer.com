import { expect, test } from "@playwright/test";

test("contact form loads", async ({ page }) => {
  await page.goto("/freelance/contact");
  await expect(page).toHaveTitle("Contact | Freelance | Ben Limmer");
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  await expect(page.getByLabel("Your Name*", { exact: false })).toBeVisible();
  await expect(page.getByLabel("Your Email Address*", { exact: false })).toBeVisible();
  await expect(page.getByLabel("Message*", { exact: false })).toBeVisible();
});
