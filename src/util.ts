import type { CollectionEntry } from "astro:content";
import { Temporal } from "temporal-polyfill";

export function parseBlogPost(post: CollectionEntry<"blog">) {
  const [year, month, day, ...slugParts] = post.id.split("-");
  const dasherizedPostTitle = slugParts.join("-");
  const date = new Temporal.PlainDate(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
  const slug = [
    date.year,
    String(date.month).padStart(2, "0"),
    String(date.day).padStart(2, "0"),
    dasherizedPostTitle,
  ].join("/");

  return {
    ...post,
    slug,
    date,
    year,
    month,
    day,
  };
}
