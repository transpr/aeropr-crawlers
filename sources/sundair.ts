import { gnewsSource } from "./google-news.js";

// Sundair: gnews discovery fallback (European coverage, full country list).
export const sundair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sundair",
  orgName: "Sundair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:sundair.com) when:30d",
});
