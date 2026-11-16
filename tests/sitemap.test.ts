import { expect, test } from "@playwright/test";

test("sitemap lists active blog posts and omits archived ones", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap-0.xml")).text();
  expect(sitemap).toContain("<loc>https://benlimmer.com/blog/2021/01/29/circleci-jest-cache/</loc>");
  expect(sitemap).not.toContain("/blog/2011/03/12/long-time-no-talk/");
});
