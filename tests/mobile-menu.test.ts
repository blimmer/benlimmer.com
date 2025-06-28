import { expect, test } from "@playwright/test";

// Only run these tests on mobile projects
test.describe("Mobile Menu", () => {
  test.skip(() => {
    const projectName = test.info().project.name;
    return !projectName.includes("Mobile");
  }, "Mobile menu tests only run on mobile projects");

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows hamburger menu icon on mobile", async ({ page }) => {
    // Desktop menu should be hidden on mobile
    const desktopMenu = page.locator("ul.md\\:flex");
    await expect(desktopMenu).toBeHidden();

    // Mobile menu summary (hamburger) should be visible
    const hamburgerButton = page.locator("details summary");
    await expect(hamburgerButton).toBeVisible();

    // Check hamburger icon (three lines) is present
    const hamburgerIcon = page.locator("details summary svg");
    await expect(hamburgerIcon).toBeVisible();
    await expect(hamburgerIcon).toHaveAttribute("viewBox", "0 0 24 24");

    // Check accessibility attributes
    await expect(hamburgerButton).toHaveAttribute("aria-label", "Toggle menu");
    await expect(hamburgerButton).toHaveAttribute("role", "button");
    await expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
    await expect(hamburgerButton).toHaveAttribute("aria-controls", "mobile-menu");
  });

  test("opens mobile menu when hamburger icon is clicked", async ({ page }) => {
    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");
    const details = page.locator("details");

    // Initially, mobile menu should not be visible
    await expect(mobileMenu).toBeHidden();
    await expect(details).not.toHaveAttribute("open");

    // Click hamburger button to open menu
    await hamburgerButton.click();

    // Menu should now be visible and details should have open attribute
    await expect(mobileMenu).toBeVisible();
    await expect(details).toHaveAttribute("open");
    await expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
  });

  test("shows expected navigation links in mobile menu", async ({ page }) => {
    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");

    // Open the mobile menu
    await hamburgerButton.click();
    await expect(mobileMenu).toBeVisible();

    // Check that all expected navigation links are present
    const expectedLinks = [
      { href: "/about", text: "About" },
      { href: "/freelance", text: "Freelance" },
      { href: "/blog", text: "Blog" },
      { href: "/portfolio", text: "Portfolio" },
    ];

    for (const expectedLink of expectedLinks) {
      const link = mobileMenu.locator(`a[href="${expectedLink.href}"]`);
      await expect(link).toBeVisible();
      await expect(link).toHaveText(expectedLink.text);
      await expect(link).toHaveAttribute("role", "menuitem");
    }

    // Verify the menu has the correct role and structure
    await expect(mobileMenu).toHaveAttribute("role", "menu");
    await expect(mobileMenu).toHaveAttribute("id", "mobile-menu");

    // Check that all menu items are list items with correct role
    const menuItems = mobileMenu.locator("li");
    await expect(menuItems).toHaveCount(4);

    for (let i = 0; i < 4; i++) {
      const menuItem = menuItems.nth(i);
      await expect(menuItem).toHaveAttribute("role", "none");
    }
  });

  test("closes mobile menu when hamburger icon is clicked again", async ({ page }) => {
    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");
    const details = page.locator("details");

    // Open the menu first
    await hamburgerButton.click();
    await expect(mobileMenu).toBeVisible();
    await expect(details).toHaveAttribute("open");
    await expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");

    // Click hamburger button again to close menu
    await hamburgerButton.click();

    // Menu should now be hidden and details should not have open attribute
    await expect(mobileMenu).toBeHidden();
    await expect(details).not.toHaveAttribute("open");
    await expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });

  test("navigates to correct page when mobile menu link is clicked", async ({ page }) => {
    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");

    // Open the mobile menu
    await hamburgerButton.click();
    await expect(mobileMenu).toBeVisible();

    // Click on the "About" link
    const aboutLink = mobileMenu.locator('a[href="/about"]');
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    // Verify navigation to about page
    await expect(page).toHaveURL(/.*\/about$/);

    // Verify we're on the about page by checking for page content
    const aboutHeading = page.getByRole("heading", { level: 1 });
    await expect(aboutHeading).toBeVisible();
  });

  test("shows current page highlight in mobile menu", async ({ page }) => {
    // Navigate to blog page
    await page.goto("/blog");

    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");

    // Open the mobile menu
    await hamburgerButton.click();
    await expect(mobileMenu).toBeVisible();

    // Check that the blog link has the active styling
    const blogLink = mobileMenu.locator('a[href="/blog"]');
    await expect(blogLink).toHaveAttribute("aria-current", "page");
    await expect(blogLink).toHaveClass(/bg-gray-700 text-white/);

    // Check that other links don't have active styling
    const aboutLink = mobileMenu.locator('a[href="/about"]');
    await expect(aboutLink).not.toHaveAttribute("aria-current", "page");
    await expect(aboutLink).not.toHaveClass(/bg-gray-700 text-white/);
  });

  test("closes mobile menu when escape key is pressed", async ({ page }) => {
    const hamburgerButton = page.locator("details summary");
    const mobileMenu = page.locator("#mobile-menu");
    const details = page.locator("details");

    // Open the menu first
    await hamburgerButton.click();
    await expect(mobileMenu).toBeVisible();
    await expect(details).toHaveAttribute("open");

    // Press escape key
    await page.keyboard.press("Escape");

    // Menu should now be hidden
    await expect(mobileMenu).toBeHidden();
    await expect(details).not.toHaveAttribute("open");
    await expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });
});
