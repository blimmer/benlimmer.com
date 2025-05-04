import type { CollectionEntry } from "astro:content";
import { Temporal } from "temporal-polyfill";

export function parseBlogPost(post: CollectionEntry<"blog">) {
  const [year, month, day, ...slugParts] = post.id.split("-");
  const slug = slugParts.join("-");
  const date = new Temporal.PlainDate(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
  return { date, slug, year, month, day };
}
