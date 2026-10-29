import { rssSource } from "./rss.js";

// Zurich Airport (Flughafen Zürich) — native PressPage RSS feed (EN).
// Discovered 2026-10-29: no media-list signup needed.
export const zurichAirport: ReturnType<typeof rssSource> = rssSource({
  slug: "zurich-airport",
  orgName: "Zurich Airport",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  feedUrl: "https://newsroom.flughafen-zuerich.ch/tagfeed/en/tags/medienmitteilung",
});
