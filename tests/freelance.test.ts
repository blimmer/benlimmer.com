import { expect, test } from "@playwright/test";

test("displays specialties", async ({ page }) => {
  await page.goto("/freelance");
  await expect(page.getByRole("heading", { name: "Specialties" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AI Enablement" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Developer Experience (DX)" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cloud Architecture" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "DevOps" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Application Development" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Talks" })).toBeVisible();
});

test("contact button is visible and navigates to contact page", async ({ page }) => {
  await page.goto("/freelance");
  const contactButton = page.getByRole("link", { name: /contact me/i });
  await expect(contactButton).toBeVisible();
  await contactButton.click();
  expect(new URL(page.url()).pathname).toEqual("/freelance/contact");
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});
