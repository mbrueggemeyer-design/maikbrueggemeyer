import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const issues = await getCollection("wohnzimmer");

  const items = issues
    .sort(
      (a, b) =>
        b.data.date.valueOf() - a.data.date.valueOf()
    )
    .map((issue) => ({
      title: `Wohnzimmer #${issue.data.issue}: ${issue.data.title}`,
      description: issue.data.teaser ?? "",
      pubDate: issue.data.date,
      link: `/wohnzimmer/${issue.id}/`,
    }));

  return rss({
    title: "Maik Brüggemeyer – Wohnzimmer",
    description:
      "Persönliche Texte über Pop, Literatur, Politik und den Alltag des Schreibens.",
    site: context.site!,
    items,
    customData: `<language>de-DE</language>`,
  });
};