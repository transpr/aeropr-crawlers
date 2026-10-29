import { rssSource } from "./rss.js";

// Air Canada — media page (aircanada.com/media) links an RSS feed; same TMG
// platform as Schiphol. Feed URL guessed as /media/feed/ — to validate by cron.
export const airCanada: ReturnType<typeof rssSource> = rssSource({
  slug: "airCanada",
  orgName: "Air Canada",
  orgGroup: null,
  alliance: star,
  type: "airline",
  sector: "air",
  language: "en",
  feedUrl: "https://www.aircanada.com/media/feed/",
});
