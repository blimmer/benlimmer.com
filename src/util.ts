import { getCollection, type CollectionEntry } from "astro:content";
import { Temporal } from "temporal-polyfill";

export type BlogPost = ReturnType<typeof parseBlogPost>;

/**
 * Returns all blog posts, excluding archived posts.
 */
export async function getActiveBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => !post.data.archive);
}

/**
 * Returns all blog posts, including archived posts.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = (await getCollection("blog"))
    .map((post) => parseBlogPost(post))
    .sort((a, b) => Temporal.ZonedDateTime.compare(b.date, a.date));

  return posts;
}

function parseBlogPost(post: CollectionEntry<"blog">) {
  const [year, month, day, ...slugParts] = post.id.split("-");
  const dasherizedPostTitle = slugParts.join("-");
  const date = new Temporal.PlainDate(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
  const zonedDateTime = date.toZonedDateTime({
    timeZone: "America/Denver",
    plainTime: Temporal.PlainTime.from("00:00"),
  });
  const slug = [
    zonedDateTime.year,
    String(zonedDateTime.month).padStart(2, "0"),
    String(zonedDateTime.day).padStart(2, "0"),
    dasherizedPostTitle,
  ].join("/");

  return {
    ...post,
    slug,
    date: zonedDateTime,
    year: zonedDateTime.year,
    month: zonedDateTime.month,
    day: zonedDateTime.day,
  };
}
