import { expect, test } from "@playwright/test";

test.describe("Blog Page", () => {
  test("displays blog post content with proper structure", async ({ page }) => {
    // Navigate to a blog post that has known pagination
    await page.goto("/blog/2021/01/29/circleci-jest-cache");

    // Check page title includes post title
    await expect(page).toHaveTitle(/Restoring the Jest cache in Circle CI.*Ben Limmer/);

    // Check main heading
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toHaveText("Restoring the Jest cache in Circle CI");

    // Check publication date is displayed with correct format
    const publishedDate = page.locator("text=/Posted on .* by Ben Limmer/");
    await expect(publishedDate).toBeVisible();
    await expect(publishedDate).toHaveText("Posted on January 29, 2021 by Ben Limmer");

    // Check author avatar is present
    const avatar = page.getByAltText("Avatar image of Ben Limmer");
    await expect(avatar).toBeVisible();

    // Check main content exists
    const contentSection = page.locator("text=/Jest is a great testing framework/");
    await expect(contentSection).toBeVisible();

    // Check bug report section exists
    const bugReportSection = page.getByRole("link", { name: "Report a Problem" });
    await expect(bugReportSection).toBeVisible();
  });

  test("has proper SEO meta tags", async ({ page }) => {
    await page.goto("/blog/2021/01/29/circleci-jest-cache");

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /How to use the jest cache to speed up jest tests on CircleCI/,
    );

    // Check basic Open Graph tags
    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute("content", "article");

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /Restoring the Jest cache in Circle CI/);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute("content", /How to use the jest cache to speed up jest tests/);

    // Check article-specific Open Graph tags
    const articlePublished = page.locator('meta[property="article:published_time"]');
    await expect(articlePublished).toHaveAttribute("content", /2021-01-29/);

    const articleAuthor = page.locator('meta[property="article:author"]');
    await expect(articleAuthor).toHaveAttribute("content", "https://benlimmer.com/about/");
  });

  test("has complete OpenGraph tags and valid JSON-LD structured data", async ({ page }) => {
    await page.goto("/blog/2021/01/29/circleci-jest-cache");

    // Validate complete OpenGraph metadata
    const ogSiteName = page.locator('meta[property="og:site_name"]');
    await expect(ogSiteName).toHaveAttribute("content", "BenLimmer.com");

    const ogUrl = page.locator('meta[property="og:url"]');
    await expect(ogUrl).toHaveAttribute(
      "content",
      /https:\/\/benlimmer\.com\/blog\/2021\/01\/29\/circleci-jest-cache\/?/,
    );

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", /headshot\.png/);

    // Check article tags
    const articleTags = page.locator('meta[property="article:tag"]');
    await expect(articleTags).toHaveCount(5);

    const tagValues = await articleTags.evaluateAll((tags) => tags.map((tag) => tag.getAttribute("content")));
    expect(tagValues).toEqual(["jest", "circleci", "circle-ci", "test", "cache"]);

    // Check Twitter meta tags
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute("content", "summary");

    const twitterSite = page.locator('meta[name="twitter:site"]');
    await expect(twitterSite).toHaveAttribute("content", "@l1m5");

    // Validate complete JSON-LD structured data
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);

    const jsonLdContent = await jsonLd.textContent();
    const structuredData = JSON.parse(jsonLdContent!);

    // Validate the complete JSON-LD structure
    expect(structuredData["@context"]).toBe("https://schema.org");
    expect(structuredData["@type"]).toBe("BlogPosting");
    expect(structuredData.headline).toBe("Restoring the Jest cache in Circle CI");
    expect(structuredData.description).toBe(
      "How to use the jest cache to speed up jest tests on CircleCI. Save and restore jest cache in your CircleCI jobs.",
    );
    expect(structuredData.datePublished).toBe("2021-01-29T07:00:00Z");
    expect(structuredData.dateModified).toBe("2023-07-12T10:55:50+02:00");
    expect(structuredData.author).toEqual({
      "@type": "Person",
      name: "Ben Limmer",
      url: "https://benlimmer.com/about/",
    });
    expect(structuredData.image).toMatch(/headshot\.png/);
    expect(structuredData.keywords).toEqual(["jest", "circleci", "circle-ci", "test", "cache"]);
    expect(structuredData.inLanguage).toBe("en-US");
    expect(structuredData.wordCount).toBe(528);
    expect(structuredData.articleBody).toContain("[Jest](https://jestjs.io/) is a great testing framework");
    expect(structuredData.articleBody).toContain("CircleCI orb");
    expect(structuredData.articleBody).toContain("## Final Thoughts");
  });

  test("pagination between blog posts works correctly", async ({ page }) => {
    await page.goto("/blog/2021/01/29/circleci-jest-cache");

    // Check pagination navigation exists
    const paginationNav = page.locator('nav[aria-label="Post Pagination"]');
    await expect(paginationNav).toBeVisible();

    // Test Previous Post link (older post) - should go to the Datadog pino post
    const prevPost = page.locator("a[rel='prev']");
    await expect(prevPost).toBeVisible();
    await expect(prevPost).toContainText("Previous Post");

    // Verify the href points to the expected previous post
    const prevHref = await prevPost.getAttribute("href");
    expect(prevHref).toBe("/blog/2020/10/23/make-pino-log-messages-appear-with-the-correct-status-in-datadog");

    // Click and verify navigation to the specific expected post
    await prevPost.click();
    expect(page.url()).toContain("/blog/2020/10/23/make-pino-log-messages-appear-with-the-correct-status-in-datadog");

    // Verify we're on the correct post by checking the title
    const prevHeading = page.getByRole("heading", { level: 1 });
    await expect(prevHeading).toHaveText("Make pino Log Messages Appear with the Correct Status in Datadog");

    // Go back to original post
    await page.goBack();
    expect(page.url()).toContain("/blog/2021/01/29/circleci-jest-cache");

    // Test Next Post link (newer post) - should go to the AWS SDK post
    const nextPost = page.locator("a[rel='next']");
    await expect(nextPost).toBeVisible();
    await expect(nextPost).toContainText("Next Post");

    // Verify the href points to the expected next post
    const nextHref = await nextPost.getAttribute("href");
    expect(nextHref).toBe("/blog/2021/06/25/specifying-aws-sdk-version-aws-cdk-nodejs-function");

    // Click and verify navigation to the specific expected post
    await nextPost.click();
    expect(page.url()).toContain("/blog/2021/06/25/specifying-aws-sdk-version-aws-cdk-nodejs-function");

    // Verify we're on the correct post by checking the title
    const nextHeading = page.getByRole("heading", { level: 1 });
    await expect(nextHeading).toHaveText("Specifying the aws-sdk version in aws-cdk NodejsFunction");
  });

  test("archived posts show archive notice and no pagination", async ({ page }) => {
    // Test with an older post that should be archived
    await page.goto("/blog/2011/03/12/long-time-no-talk");

    // Verify the page loads correctly
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();

    // Check for archive notice
    const archiveNotice = page
      .locator("text=/This post was published over .* years ago/")
      .or(page.locator("text=/archived/i"));
    await expect(archiveNotice).toBeVisible();

    // Archived posts should have noindex meta tag
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute("content", "noindex");

    // Archived posts should not have pagination
    const paginationNav = page.locator('nav[aria-label="Post Pagination"]');
    await expect(paginationNav).not.toBeVisible();
  });
});
