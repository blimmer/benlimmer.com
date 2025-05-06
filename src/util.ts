import type { CollectionEntry } from "astro:content";
import { Temporal } from "temporal-polyfill";

export function parseBlogPost(post: CollectionEntry<"blog">) {
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
