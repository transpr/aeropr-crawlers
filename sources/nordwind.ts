import { gnewsSource } from "./google-news.js";

// Nordwind Airlines: gnews discovery fallback (European coverage, full country list).
export const nordwind: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "nordwind",
  orgName: "Nordwind Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Nordwind") when:30d",
});
