import { gnewsSource } from "./google-news.js";

// GKN Aerospace: gnews discovery fallback (newsroom not directly crawlable from runners).
export const gknAerospace: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gkn-aerospace",
  orgName: "GKN Aerospace",
  orgGroup: "Melrose",
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:gknaerospace.com) when:30d",
});
