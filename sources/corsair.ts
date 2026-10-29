import { gnewsSource } from "./google-news.js";

// Corsair: gnews discovery fallback (newsroom not directly crawlable from runners).
export const corsair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "corsair",
  orgName: "Corsair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flycorsair.com) when:30d",
});
