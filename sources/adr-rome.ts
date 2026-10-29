import { gnewsSource } from "./google-news.js";

// Aeroporti di Roma: gnews discovery fallback (newsroom not directly crawlable from runners).
export const adrRome: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "adr-rome",
  orgName: "Aeroporti di Roma",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:adr.it) when:30d",
});
