import { gnewsSource } from "./google-news.js";

// Changi Airport Group: gnews discovery fallback (newsroom not directly crawlable from runners).
export const changi: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "changi",
  orgName: "Changi Airport Group",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:changiairport.com OR site:changiairportgroup.com) when:30d",
});
