import { expect, test } from "@playwright/test";

const WHITE = "rgb(255, 255, 255)";
const TRANSPARENT = "rgba(0, 0, 0, 0)";

test.describe("Header navigation", () => {
  test("uses plain links for site navigation", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav is hidden on mobile");
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "Ben Limmer", exact: true })).toHaveAttribute("href", "/");
    for (const name of ["About", "Freelance", "Blog", "Portfolio"]) {
      await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
    }
    await expect(page.getByRole("menubar")).toHaveCount(0);
  });

  test("highlights the current section in the desktop nav", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav is hidden on mobile");
    await page.goto("/blog");

    const nav = page.getByRole("navigation", { name: "Main navigation" });
    const current = nav.locator('ul.md\\:flex a[aria-current="page"]');
    await expect(current).toHaveText("Blog");
    await expect(current).toHaveCSS("color", WHITE);
    await expect(current).toHaveCSS("font-weight", "700");

    const other = nav.locator("ul.md\\:flex a", { hasText: "About" });
    await expect(other).toHaveCSS("color", "rgba(255, 255, 255, 0.8)");
  });

  test("highlights the current section in the mobile menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile menu is hidden on desktop");
    await page.goto("/blog");
    await page.locator("details summary").click();

    const current = page.locator('#mobile-menu a[aria-current="page"]');
    await expect(current).toHaveText("Blog");
    await expect(current).toHaveCSS("color", WHITE);
    await expect(current).not.toHaveCSS("background-color", TRANSPARENT);
  });
});

test("prefetches internal pages on hover", async ({ page, isMobile }) => {
  test.skip(isMobile, "Hover prefetching only applies to devices that support hover");
  await page.goto("/");

  const prefetch = page.waitForRequest((request) => new URL(request.url()).pathname.replace(/\/$/, "") === "/blog");
  await page.locator('nav ul.md\\:flex a[href="/blog"]').hover();
  await prefetch;
});
