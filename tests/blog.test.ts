import { expect, test } from "@playwright/test";

test("blog index shows posts", async ({ page }) => {
  await page.goto("/blog");
  await expect(page).toHaveTitle("Blog | Ben Limmer");
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Read post:/ })).toBeVisible();
});

// Open the first blog post and verify heading
// Uses the first "Read post" link on the page

test("blog post page loads", async ({ page }) => {
  await page.goto("/blog");
  const firstPost = page.getByRole("link", { name: /Read post:/ }).first();
  const postTitle = await firstPost.getAttribute("aria-label");
  await firstPost.click();
  if (postTitle) {
    const titleText = postTitle.replace("Read post: ", "");
    await expect(page.getByRole("heading", { name: titleText })).toBeVisible();
  } else {
    await expect(page.getByRole("main")).toBeVisible();
  }
});
