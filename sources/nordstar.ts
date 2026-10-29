import { gnewsSource } from "./google-news.js";

// NordStar (airline): gnews discovery fallback (European coverage, full country list).
export const nordstar: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "nordstar",
  orgName: "NordStar (airline)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("NordStar" airline) when:30d",
});
