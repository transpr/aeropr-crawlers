import { gnewsSource } from "./google-news.js";

// StandardAero: gnews discovery fallback (newsroom not directly crawlable from runners).
export const standardAero: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "standard-aero",
  orgName: "StandardAero",
  orgGroup: null,
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(site:standardaero.com) when:30d",
});
