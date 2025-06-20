import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has a hero component with the proper call to action", async ({ page }) => {
  const cta = page.getByRole("link", { name: "Work with Me" });
  expect(cta).toBeVisible();
  await cta.click();
  expect(new URL(page.url()).pathname).toEqual("/freelance");
});

test("lists recent blog posts from newest to oldest and navigates to the post", async ({ page }) => {
  const blogSection = page.locator("#blog");
  const blogHeading = blogSection.getByRole("heading", {
    name: "Latest Blog Posts",
  });
  await expect(blogHeading).toBeVisible();

  // There should be 3 posts displayed
  const posts = blogSection.getByRole("listitem");
  await expect(posts).toHaveCount(3);

  // Posts should appear newest -> oldest, left -> right
  const dates: Date[] = [];
  for (const post of await posts.all()) {
    const time = post.locator("time");
    const datetime = await time.getAttribute("datetime");
    if (!datetime) {
      throw new Error("Post has no datetime");
    }
    dates.push(new Date(datetime));
  }
  for (let i = 0; i < dates.length - 1; i++) {
    expect(dates[i].getTime()).toBeGreaterThanOrEqual(dates[i + 1].getTime());
  }

  // Clicking a post should navigate to the post page
  const firstPost = posts.first();
  const postTitle = await firstPost.locator("h3").textContent();
  if (!postTitle) {
    throw new Error("Could not find post title");
  }
  await firstPost.click();
  const pageTitle = page.getByRole("heading", { level: 1, name: postTitle });
  await expect(pageTitle).toBeVisible();
});
