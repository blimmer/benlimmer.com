import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tldr: z.string().optional(),
  }),
});

export const collections = { portfolio };
