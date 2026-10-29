import { gnewsSource } from "./google-news.js";

// Gulfstream: gnews discovery fallback (newsroom not directly crawlable from runners).
export const gulfstream: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gulfstream",
  orgName: "Gulfstream",
  orgGroup: "General Dynamics",
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:gulfstreamaerospace.com) when:30d",
});
