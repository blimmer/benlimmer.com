import rss from "@astrojs/rss";
import type { AstroUserConfig } from "astro";
import { getCollection } from "astro:content";
import { parseBlogPost } from "src/util";

export async function GET(context: AstroUserConfig) {
  const posts = (await getCollection("blog")).map(parseBlogPost);

  return rss({
    title: "BenLimmer.com",
    description: "Musings on developer experience, productivity, and technology trends.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.date.toInstant().epochMilliseconds),
      description: post.data.description,
      categories: post.data.tags,
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
