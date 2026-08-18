import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const essays = defineCollection({
  loader: glob({
    base: "./src/content/essays",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),
    teaser: z.string(),
    date: z.coerce.date(),

    topic: z.enum([
      "Pop",
      "Literatur",
      "Film",
      "Gesellschaft",
      "Politik",
    ]),

    publication: z.string(),
    featured: z.boolean().optional(),
  }),
});

const conversations = defineCollection({
  loader: glob({
    base: "./src/content/conversations",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),
    teaser: z.string(),
    date: z.coerce.date(),
    publication: z.string(),
    introduction: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const wohnzimmer = defineCollection({
  loader: glob({
    base: "./src/content/wohnzimmer",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),
    teaser: z.string().optional(),
    date: z.coerce.date(),
    issue: z.number(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  essays,
  conversations,
  wohnzimmer,
};