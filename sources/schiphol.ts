import { rssSource } from "./rss.js";

// Schiphol Group — native RSS feed on news.schiphol.com (EN), confirmed 2026-10-29.
// No media-list signup needed.
export const schiphol: ReturnType<typeof rssSource> = rssSource({
  slug: "schiphol",
  orgName: "Schiphol Group",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  feedUrl: "https://news.schiphol.com/feed/",
});
