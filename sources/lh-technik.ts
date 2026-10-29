import { rssSource } from "./rss.js";

// Lufthansa Technik — TMG newsroom (same platform as Schiphol), RSS feed linked
// on https://newsroom.lufthansa-technik.com/en-us/. Confirmed 2026-10-29.
// Media distribution list also available:
// https://newsroom.lufthansa-technik.com/enlist-in-our-press-release-distribution-list/
export const lhTechnik: ReturnType<typeof rssSource> = rssSource({
  slug: "lh-technik",
  orgName: "Lufthansa Technik",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  feedUrl: "https://newsroom.lufthansa-technik.com/en-us/feed/",
});
